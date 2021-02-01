import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './route'
// import {excueteTasks} from './servicestasks'
import _debug from 'debug'
const debug = _debug('seek-my-life-backend:index')
import log from './util/log'

const app = new Koa()

app.use(bodyParser())

app.use(log)

app.use(router.routes())

const port = 3000

app.listen(port)

//excueteTasks()

debug(`服务http://localhost:${port}`)