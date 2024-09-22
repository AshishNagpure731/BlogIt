const {  mongoose } = require('mongoose')
const userModel = require('../model/User')
const bcrypt = require('bcrypt')

// async function r6egisterUser(email,password) {
//   const result = await mongoose.connection.collection('auth').insertOne({
//     email: email,
//     password: password
//   })
//   return result
// }

module.exports={
  async register(req, res) {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    try {
      // Check if user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ message: "User already exists",access:false });
      }

      // Create a new user

      const newUser = await new userModel({ email:email, password:hashedPassword });

      await newUser.save();
      res.status(201).send({ message: "User registered successfully",access:true });
    } catch (err) {
      console.log("Error in registration: ", err);
      res.status(500).send("Internal server error");
    }
  },

   async validateUser(req,res,next){
       const {email,password}=req.body
       // const response = await userModel.find({email : email})
       try {
           const user = await userModel.findOne({ email:email });
            console.log(user)  
        
            if (user) {
              const isMatch = await bcrypt.compare(password, user.password);
              if (isMatch){//user.password === password) {

                res.send({ validate: true, message: "Welcome", access:true });
                console.log("Welcome");
              } else {
                res.send({ validate: false, message: "Incorrect password", access:false });
                console.log("Incorrect password");
              }
            } else {
              // const userRig = await r6egisterUser(email,password)
              res.send({ validate: false, message: "User not found", access:false });
              console.log("User not found");
            }
          } catch (err) {
            console.log("Error in validation: ", err);
            res.status(500).send("Internal server error");
          }
    }
}