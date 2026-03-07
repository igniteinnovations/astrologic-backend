import mongoose from "mongoose";

const satSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },

    tips: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("SatTip", satSchema);
