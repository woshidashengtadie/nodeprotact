const request = require('superagent')
const cheerio = require('cheerio')
const Koa =require('koa')

const  app = new Koa

const arr = []

app.use(async ctx =>{} )

request
    .post('https://shiguangkey.com/')
    .end((err,res)=>{

    const data = res.text;
    const $ = cheerio.load(data)

    $(".course-item").each((i,v)=>{
        const $v = $(v)
        const obj = {
            img:$v.find("img").prop("src"),
            title:$v.find("a.ictxt").text().trim()
        }
        arr.push(obj)
    })
})



