import Blog from "../models/blogModel.js";

// helper to extract youtube video id
const getYoutubeVideoId = (url) => {
  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;

  const match = url.match(regExp);

  return match ? match[1] : null;
};

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const { category, title, description, content, author, type, videoUrl } =
      req.body;

    let thumbnail = null;

    // If video blog → generate thumbnail
    if (type === "VIDEO") {
      if (!videoUrl) {
        return res.status(400).json({
          message: "videoUrl is required for video blogs",
        });
      }

      const videoId = getYoutubeVideoId(videoUrl);

      if (videoId) {
        thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    }

    const blog = await Blog.create({
      category,
      title,
      description,
      content,
      author,
      type,
      videoUrl,
      thumbnail,
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

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    res.json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    await Blog.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
