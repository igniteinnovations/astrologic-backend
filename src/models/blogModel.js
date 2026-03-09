import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },

    author: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["ARTICLE", "VIDEO"],
      default: "ARTICLE",
    },

    videoUrl: {
      type: String,
    },

    thumbnail: {
      type: String,
    },

    status: {
      type: String,
      default: "PUBLISHED",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Blog", blogSchema);
