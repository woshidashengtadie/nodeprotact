
const Router = require("koa-router")
const admin = require("./admin")
const router = new Router

//查找  get
//增加  post
//修改  put
//删除  delete

router.get('/',admin.root)
router.get('/home',admin.home)
router.get('/user',admin.user)



module.exports = router



