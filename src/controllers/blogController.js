import Blog from "../models/blogModel.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const { category, title, description, content, author } = req.body;

    const blog = await Blog.create({
      category,
      title,
      description,
      content,
      author,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET BLOGS
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
