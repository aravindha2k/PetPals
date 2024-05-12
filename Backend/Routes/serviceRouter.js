const { serviceModel } = require("../AllSchema/serviceSchema");
const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const serviceRouter = express.Router();

// Create a new service
serviceRouter.post("/create", async (req, res) => {
  try {
    const service = await new serviceModel(req.body);
    await service.save();
    return res.status(201).json({ error: false, msg: "Service created successfully", service });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, msg: "Unable to create service" });
  }
});

// Get all services
serviceRouter.get("/services", async (req, res) => {
  try {
    const services = await serviceModel.find();
    return res.status(200).json({ error: false, items: services });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, msg: "Unable to get services" });
  }
});


serviceRouter.get("/services/:id", async (req, res) => {
  try {
    const services = await serviceModel.find({_id:req.params.id});
    return res.status(200).json({ error: false, items: services });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, msg: "Unable to get services" });
  }
});

// Update a service
serviceRouter.patch("/service/:id", async (req, res) => {
  try {
    const service = await serviceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ error: true, msg: "Service not found" });
    }
    return res.status(200).json({ error: false, msg: "Service updated successfully", service });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, msg: "Unable to update service" });
  }
});

// Delete a service
serviceRouter.delete("/service/:id", async (req, res) => {
  try {
    const service = await serviceModel.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ error: true, msg: "Service not found" });
    }
    return res.status(200).json({ error: false, msg: "Service deleted successfully", service });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, msg: "Unable to delete service" });
  }
});

module.exports = { serviceRouter };
