import Router from 'koa-router'
import {
    wrapRoute
} from '../../util/wrapRoute'
import { getUser } from '../../service/user'

const router = new Router()

router.get('/', wrapRoute(async ctx => {
    /**
     * route层 判断 请求参数是否合法 合法 则进入service层
     * 使用joi模块进行验证 validate
     * const ret = await getUser()
     * return ret
     */

     const user = await getUser()
     return user
}))

export default router