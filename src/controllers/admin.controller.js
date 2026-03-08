import Admin from "../models/admin.model.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const adminCount = await Admin.countDocuments();

    // FIRST ADMIN CREATION
    if (adminCount === 0) {
      const newAdmin = await Admin.create({
        email,
        password,
        name: "Admin",
      });

      return res.status(201).json({
        message: "Admin created successfully (first setup)",
        admin: {
          _id: newAdmin._id,
          email: newAdmin.email,
          name: newAdmin.name,
        },
      });
    }

    // LOGIN
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      message: "Login successful",
      admin: {
        _id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
