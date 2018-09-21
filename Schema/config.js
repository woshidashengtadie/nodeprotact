//链接数据库 导出 Schema
const mongoose = require("mongoose")
const db = mongoose.createConnection
("mongodb://localhost:27017/blogproject",{ useNewUrlParser: true })



//用原生es6 promise 代替 mongose 自实现 promise
mongoose.Promise = global.Promise


const Schema = mongoose.Schema


db.on("error",()=>{console.log("链接失败")})
db.on("open",()=>{console.log("链接成功")})





module.exports = {
    db,
    Schema
}