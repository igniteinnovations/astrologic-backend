import Consultation from "../models/consultationModel.js";

// USER BOOK CONSULTATION
export const bookConsultation = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    const { name, gender, contact, email, service, message } = req.body;

    const consultation = await Consultation.create({
      name,
      gender,
      contact,
      email,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Consultation booked successfully",
      data: consultation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ADMIN VIEW CONSULTATIONS
export const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: consultations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
