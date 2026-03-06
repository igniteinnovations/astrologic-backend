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
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "PUBLISHED",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Blog", blogSchema);
