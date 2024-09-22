const blogModel= require('../model/Blog')
const mongoose =require('mongoose')

async function getNextSequenceValue(sequenceName) {
    const result = await mongoose.connection.collection('counters').findOneAndUpdate(
        { _id: sequenceName },
        { $inc: { seq: 1 } },
        {
            returnDocument: 'after', // Ensures we get the updated document
            upsert: true,            // Creates the document if it doesn't exist
        }
    );
    console.log("Full Result: ", result);
    if (!result || result.seq === undefined) {
        throw new Error("Sequence document not found or created");
    }
    return result.seq;
}
module.exports={
    async blogData(req, res) {
        try {
            const nextId = await getNextSequenceValue('users'); 
        const blog = new blogModel({
            id: nextId,
            heading: req.body.heading,
            content1: req.body.content1,
            content2: req.body.content2,
            content3: req.body.content3,
            content4: req.body.content4,
            content5: req.body.content5,
            content6: req.body.content6,
            place: req.body.place,
        });
        await blog.save();
        res.status(201).send(blog);
            // const blog = await new blogModel(req.body).save();
            // res.status(201).send(blog);
        } catch (error) {
            console.error("Error saving blog post: ", error.message, error.stack);
            res.status(500).send({ error: "Failed to save blog post" });
        }
    },
    async getAll(req, res) {
        const result = await blogModel.find();
        res.send(result);
      },
      async getbyID(req, res) {
        console.log(req.params.id)
        try {
            const result = await blogModel.findOne({id:req.params.id});
            if (!result) {
                return res.status(404).send({ error: "Blog post not found" });
            }
            res.send(result);
        } catch (error) {
            res.status(500).send({ error: "Internal Server Error" });
        }
    }
}