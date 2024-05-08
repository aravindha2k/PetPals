const express=require('express');
const { userModel } = require('../AllSchema/userSchema');
const userRouter=express.Router()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userRouter.post("/signup", async (req, res) => {
    const{email,username,password}=req.body;
    const saltRound=10;
    try {
        const hashedPass=await bcrypt.hash(password,saltRound);
      const user = new userModel({email,password:hashedPass,username});
      user.save();
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(401).send("Error");
    }
  });
  userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await userModel.findOne({ email });

        // If user not found or password doesn't match, return error
        if (!user || user.password !== password) {
            return res.status(401).send("Invalid email or password");
        }

        // Generate token
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        // Send token in response
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});



module.exports=userRouter;
