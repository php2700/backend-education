import WhyChooseModel from "../Models/whyChooseModel.js";

export const getWhyChoose = async (req, res) => {
  try {
    const data = await WhyChooseModel.find();
    res.status(200).json({ message: "Fetched successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};