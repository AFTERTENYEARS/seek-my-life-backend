// import moment from 'moment'
// import {
//   createToken,
//   verifyToken
// } from './index'
// import {BusinessError} from './error'
// import {searchUser} from '../daos/users/user'
// import { USER_STATUS } from '../utils/constant'
import _debug from 'debug'
//import { constant } from 'lodash'
//import { checkRoleRequestAccess } from '../services/role'
const debug = _debug('seek-my-life-backend:util:wrapRoute')

export const wrapRoute = (fn, requireAuth = false) => {
    const generateResponse = ({
        ctx,
        requestId,
        payload,
        error,
        status
    }) => {
        ctx.body = {
            requestId,
            payload: payload || null,
            error: error || null
        }
        ctx.status = status
    }
    return async (ctx) => {
        const requestId = ctx.state.requestId
        const error = '';
        const payload = await fn.apply(ctx, [ctx])
        const status = 200

        if (requireAuth) {
            return generateResponse({
                ctx,
                requestId,
                error: '未授权的访问',
                payload,
                status
            })
        } else {
            return generateResponse({
                ctx,
                requestId,
                error,
                payload,
                status
            })
        }



        // const requestId = ctx.state.requestId
        // const requestAgent = ctx.state.requestAgent
        // if (requireAuth) {
        //     try {
        //         const authorization = ctx.request.headers.authorization
        //         const token = authorization.split(' ')[1]
        //         const {
        //             userId,
        //             userAgent,
        //             userSecret,
        //             renewTime
        //         } = await verifyToken({
        //             token,
        //             userAgent: requestAgent
        //         })
        //         const user = await searchUser({
        //             userId
        //         })
        //         if (user.status === USER_STATUS.APPLIED) {
        //             return generateResponse({
        //                 ctx,
        //                 requestId,
        //                 error: '您的账号还未通过审核',
        //                 status: 401
        //             })
        //         }

        //         if (user.status !== USER_STATUS.ENABLED) {
        //             return generateResponse({
        //                 ctx,
        //                 requestId,
        //                 error: '您的账号已被禁用',
        //                 status: 401
        //             })
        //         }

        //         if (user.secret !== userSecret) {
        //             return generateResponse({
        //                 ctx,
        //                 requestId,
        //                 error: '您的账号已在其它地方登录，若非本人请及时修改密码',
        //                 status: 401
        //             })
        //         }

        //         ctx.state.userId = userId
        //         ctx.state.roleId = user.roleId
        //         ctx.state.groupId = user.groupId
        //         // 判断是否需要续期TOKEN
        //         if (renewTime < moment().unix()) {
        //             const newToken = await createToken({
        //                 userId,
        //                 userAgent,
        //                 userSecret
        //             })
        //             ctx.response.set('x-user-token', newToken)
        //         }

        //         const {
        //             access,
        //             msg
        //         } = await checkRoleRequestAccess({
        //             roleId: user.roleId,
        //             path: ctx._matchedRoute,
        //             method: ctx.request.method
        //         })
        //         if (!access) {
        //             return generateResponse({
        //                 ctx,
        //                 requestId,
        //                 error: msg,
        //                 status: 403
        //             })
        //         }
        //     } catch (e) {
        //         return generateResponse({
        //             ctx,
        //             requestId,
        //             error: '未授权的访问',
        //             status: 401
        //         })
        //     }
        // }

        // try {
        //     const payload = await fn.apply(ctx, [ctx])
        //     return generateResponse({
        //         ctx,
        //         requestId,
        //         payload,
        //         status: 200
        //     })
        // } catch (e) {
        //     debug('服务器处理异常:%s, %s', e, e.stack)

        //     let message
        //     let status
        //     if (e instanceof BusinessError) {
        //         message = e.message
        //         status = 400
        //     } else {
        //         message = '服务器处理异常'
        //         status = 500
        //     }

        // return generateResponse({
        //     ctx,
        //     requestId,
        //     error: message,
        //     status
        // })
        // }
    }
}