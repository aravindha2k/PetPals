const express = require("express");
const { petModel } = require("../AllSchema/petModel");

const petRouter = express.Router();

petRouter.post("/create", async(req,res)=>{
    try {
        const pet = new petModel(req.body)
        const savedpet = await pet.save()
        res.status(200).json({error:false, msg:"pet profile created successfully", data:savedpet})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

petRouter.get("/data", async(req,res)=>{
    try {
        const pets = await petModel.find();
        res.status(200).json({error:false, data:pets})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

module.exports={
    petRouter
}