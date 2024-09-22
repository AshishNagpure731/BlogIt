const mongoose = require('mongoose')
const UserSchema ={
    email:{
        type:String,
        require:true
    },
    password:{
    type:String,
    require:true
    }
}
const userModel = mongoose.model("users",UserSchema)
module.exports=userModel