const express = require('express')
const userModel= require('../Controller/UserControll')
const blogController= require("../Controller/BlogController")
const CommentController=require('../Controller/CommentsController')

const router = express.Router()
router.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});
router.post("/auth/login",userModel.validateUser)
router.post("/auth/register",userModel.register)


//blog
router.post("/posts",blogController.blogData)
router.get("/posts",blogController.getAll)
router.get("/posts/:id",blogController.getbyID)

//comment
router.post('/comment',CommentController.addComment)
//to call this get :- /comment?id=1&userId=123
router.get('/comment',CommentController.getALLComment) ///:user

module.exports = router;