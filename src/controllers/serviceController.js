import Service from "../models/serviceModel.js";

// ADD SERVICE
export const addService = async (req, res) => {
  try {
    const { name } = req.body;

    const service = await Service.create({ name });

    res.status(201).json({
      success: true,
      message: "Service added successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SERVICES
export const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE SERVICE
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    res.json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE SERVICE
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    await Service.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
