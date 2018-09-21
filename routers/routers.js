const Router = require('koa-router')

//拿到操作user 表的逻辑对象
const user = require('../control/user')
const router = new Router


//设计主页
router.get("/",async (cxt)=>{
    //需要 title
    console.log(cxt)
    await cxt.render('index',{
        title:"首页"
    })
})


//动态路由 用户登录 用户注册
router.get(/^\/user\/(?=reg|login)/,async (cxt)=>{
    //show 为 true 则显示注册 false 显示登录

    const show = /reg$/.test(cxt.path)
    await cxt.render('register',{show})

})


//处理用户登录post
router.post('/user/login',async (ctx)=>{

})


//处理用户注册post
router.post('/user/login',user.reg)


module.exports = router

