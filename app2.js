const mongoose = require("mongoose")

const db = mongoose.createConnection
("mongodb://localhost:27017/cheng",{ useNewUrlParser: true })

mongoose.Promise = global.Promise

db.on("error",()=>{console.log("链接失败")})
db.on("open",()=>{console.log("链接成功")})

const Schema = mongoose.Schema

const javaScriptSchema = new Schema({
    name:String,
    age:Number,
    sex:{
        type:String,
        default:"男"
    },
    varsionKey:false
})

const javaScript = db.model("javascript",javaScriptSchema)

const data1 = {
    name:"jiancheng",
    age: 27,
}

const d1 = new javaScript(data1)

d1.save().then(res=>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})








