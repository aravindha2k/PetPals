const { serviceModel } = require("../AllSchema/serviceSchema")
const express = require("express");
const serviceRouter = express.Router();

serviceRouter.post("/services", async(req,res)=>{
    try {
        const service = await new serviceModel(req.body)
        await service.save()
        return res.status(200).json({error:false,msg:"service created successfully"})
    } catch (error) {
        console.log(error)
        return res.status(404).json({error:true,msg:"unable to create service"})
    }
})


module.exports = { serviceRouter}
