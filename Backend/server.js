const mongoose = require('mongoose')
const express = require('express')
const router = require('./Router/router')
const cors =require('cors')

const app = express()
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())
//mongodb://127.0.0.1:27017
mongoose.connect('mongodb+srv://ashi:123ban@cluster0.o7ipcjf.mongodb.net/Post').then(() => console.log("Success from DB")).then((err) => console.log(err));
app.use("/",router)

app.listen(port, () => {
    console.log("Connection Successful" ,port);
  });
