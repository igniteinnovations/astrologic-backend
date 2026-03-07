import News from "../models/news.model.js";

// CREATE NEWS
export const createNews = async (req, res) => {
  try {
    const { type, title, description, status } = req.body;

    const news = await News.create({
      type,
      title,
      description,
      status,
    });

    res.status(201).json({
      success: true,
      message: "News created successfully",
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET NEWS
export const getNews = async (req, res) => {
  try {
    const news = await News.find({ status: "PUBLISHED" }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
