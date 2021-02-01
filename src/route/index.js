import Router from 'koa-router'
import user from './api/user'

const router = new Router()

router.use('/user', user.routes())

export default router