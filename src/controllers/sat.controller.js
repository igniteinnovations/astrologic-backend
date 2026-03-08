import SatTip from "../models/sat.model.js";

// CREATE SAT TIPS
export const createSatTips = async (req, res) => {
  try {
    const { category, tips } = req.body;

    const satTips = await SatTip.create({
      category,
      tips,
    });

    res.status(201).json({
      success: true,
      message: "SAT tips created successfully",
      data: satTips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SAT TIPS
export const getSatTips = async (req, res) => {
  try {
    const tips = await SatTip.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: tips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//update
export const updateSatTips = async (req, res) => {
  try {
    const { id } = req.params;

    const sat = await SatTip.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    res.json({
      success: true,
      message: "SAT tips updated successfully",
      data: sat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//delete
export const deleteSatTips = async (req, res) => {
  try {
    const { id } = req.params;

    await SatTip.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "SAT tips deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
