const mongoose = require('mongoose')
const UserSchema = {
    id: {
        require: true,
        type: Number,
        unique: true
    }
    , heading: {
        type: String
    },
    content1: {
        type: String
    },
    content2: {
        type: String
    },
    content3: {
        type: String
    },
    content4: {
        type: String
    },
    content5: {
        type: String
    },
    content6: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    place: {
        type: String
    }
}
const blogModel = mongoose.model("posts", UserSchema)
module.exports = blogModel