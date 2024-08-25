const mongoose = require("mongoose")
const Userscomment = {
    id:{
        type:Number
    },
    user:{
        type:String
    },
    comment:{
        type:String
    }
}

const commentModule = mongoose.model("comment",Userscomment)
module.exports=commentModule