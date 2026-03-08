import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: String,
  password: String, // plain text
  name: String,
});

// Compare password in plain text
adminSchema.methods.comparePassword = function (enteredPassword) {
  return enteredPassword === this.password;
};

export default mongoose.model("Admin", adminSchema);
