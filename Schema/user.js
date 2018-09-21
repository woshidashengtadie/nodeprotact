const {Schema} = require('./config')


const UserSchema = new Schema({
    username:String,
    password:String
},{varsionKey:false})

module.exports = UserSchema




