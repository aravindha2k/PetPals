const express = require("express");
const { petModel } = require("../AllSchema/petModel");

const petRouter = express.Router();

petRouter.post("/create", async(req,res)=>{
    try {
        const pet = new petModel(req.body)
        await pet.save()
        res.status(200).send(pet)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

module.exports={
    petRouter
}