import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const imageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },

    title: {
      type: String,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    imageType: {
      type: String,
      enum: ["upload", "link"],
      default: "upload",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Image", imageSchema);
