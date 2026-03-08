import BlogCategory from "../models/blogCategory.model.js";

// ADD CATEGORY
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const existingCategory = await BlogCategory.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await BlogCategory.create({ name });

    res.status(201).json({
      success: true,
      message: "Category added successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET CATEGORIES
export const getCategories = async (req, res) => {
  try {
    const categories = await BlogCategory.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//update
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await BlogCategory.findByIdAndUpdate(
      id,
      { name },
      { returnDocument: "after" },
    );

    res.json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//delete
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await BlogCategory.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
