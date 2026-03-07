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
