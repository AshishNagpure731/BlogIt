const commentModel = require('../model/comment')
const mongoose = require('mongoose')


module.exports={
   async addComment(req,res,next){
    try{
        
        const sendComment = new commentModel({
            id:req.body.id,
            user:req.body.user,
            comment:req.body.comment
        })
       await sendComment.save()
       res.status(201).send(sendComment)
    }catch(e){
        res.send("Not Posted The Comment ",e)
    }
    },

    async getALLComment(req,res){
        try{
            // const {id,user}=req.params
            const allComment = await commentModel.find()//{user:user}
            res.status(200).send(allComment)
        }catch(e){
            res.send("e")
        }
    }
}

