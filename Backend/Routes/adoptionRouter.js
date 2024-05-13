const express = require("express");
const { adoptionModel } = require("../AllSchema/adoptionModel");

const adoptionRouter = express.Router();

adoptionRouter.post("/create", async(req,res)=>{
    try {
        const adoption = new adoptionModel(req.body)
        const savedadoption = await adoption.save()
        res.status(200).json({error:false, msg:"pet adopt request successfully", data:savedadoption})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

adoptionRouter.get("/data", async(req,res)=>{
    try {
        const adoptions = await adoptionModel.find();
        res.status(200).json({error:false, data:adoptions})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})

adoptionRouter.patch("/update/:id", async(req,res)=>{
    // console.log(req.params);
    try {
        const updatedAdoption = await adoptionModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
        if(!updatedAdoption){
            return res.status(404).json({error:true, msg:"adoption not found"})
        }
        res.status(200).json({error:false, msg:"Adoption data updated successfully", data: updatedAdoption})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: true, msg: error})
    }
})



module.exports={
    adoptionRouter
}