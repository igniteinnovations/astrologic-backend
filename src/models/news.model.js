import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    type: {
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

    status: {
      type: String,
      enum: ["DRAFT", "PUBLISHED"],
      default: "PUBLISHED",
    },
  },
  { timestamps: true },
);

export default mongoose.model("News", newsSchema);
