import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    contact: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Consultation", consultationSchema);
