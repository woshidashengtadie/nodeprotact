const Router = require('koa-router')
const router = new Router


//设计主页
router.get("/",async (cxt)=>{
    //需要 title
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






module.exports = router

