import Router from 'koa-router'
import user from './api/user'
import edit from './api/edit'

const router = new Router()

router.use('/user', user.routes())
router.use('/edit', edit.routes())

export default router