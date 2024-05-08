const express=require('express');
const { userModel } = require('../AllSchema/userSchema');
const userRouter=express.Router()

userRouter.post("/signup", async (req, res) => {
    try {
      const user = new userModel(req.body);
      user.save();
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(401).send("Error");
    }
  });
  userRouter.post("/login", async (req, res) => {
    const{email,password}=req.body;
    try {
      const user =  userModel.findOne({email});
      user.save();
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(401).send("Error");
    }
  });



module.exports=userRouter;
