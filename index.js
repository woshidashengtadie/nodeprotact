/**
 * Created by Fly on 2018/9/14.
 */

const Koa = require('koa')
const router = require('./router')


const app = new Koa


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000)











