const express = require("express");
const { petModel } = require("../AllSchema/petModel");
const {auth} = require("../middlewares/auth.middleware")

const petRouter = express.Router();

petRouter.post("/create", async(req,res)=>{
    try {
        const pet = new petModel(req.body)
        const savedpet = await pet.save()
        res.status(200).json({error:false, msg:"pet added  successfully", data:savedpet})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

petRouter.post("/insertmany", async(req,res)=>{
    try {
        const savedpet = await petModel.insertMany(req.body)
        res.status(200).json({error:false, msg:"pet added successfully", data:savedpet})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

petRouter.get("/data",  async(req,res)=>{
    // console.log(req.query);
    const { q, gender, age, color, sortBy, breed, sortOrder, page, limit, species } = req.query

    const filter = {}

  

    if (gender) {
        filter.gender = gender;
    }        
    if (age) {
        filter.age = age;
    }
    if (color) {
        filter.color = { $in: color };
    }
    if (species) {
        filter.species = { $regex: species, $options: "i" };
    }
    
    try {
        // console.log(req.query);
        // console.log(filter);
        const pets = await petModel.find(filter);
        res.status(200).json({error:false, data:pets})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

petRouter.get("/data/:id", async(req,res)=>{
    try {
        const singlePet = await petModel.find({_id: req.params.id});
        if(!singlePet){
            return res.status(404).json({error:true, msg:"pet not found"})
        }
        res.status(200).json({error:false, data:singlePet})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

petRouter.patch("/update/:id", async(req,res)=>{
    // console.log(req.params);
    try {
        const updatedPet = await petModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
        if(!updatedPet){
            return res.status(404).json({error:true, msg:"pet not found"})
        }
        res.status(200).json({error:false, msg:"pet data updated successfully", data: updatedPet})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: true, msg: error})
    }
})

petRouter.delete("/delete/:id", async(req,res)=>{
    try {
        const deletedPet = await petModel.findByIdAndDelete({_id: req.params.id})
        console.log(deletedPet);
        if(!deletedPet){
            return res.status(404).json({error:true, msg:"pet not found"})
        }
        res.status(200).json({error:false, msg:"pet data deleted successfully", data: deletedPet})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: true, msg: error})
    }
})

module.exports={
    petRouter
}