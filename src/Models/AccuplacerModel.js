import mongoose from "mongoose";

const AccuplacerTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "ACCUPLACER TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. About Accuplacer ---
    aboutHeading: { type: String, default: "" }, // "About Accuplacer"
    aboutDescription: { type: String, default: "" }, // Paragraph content

    // --- 3. What's on the Tests (Dynamic List) ---
    testSectionHeading: { type: String, default: "" }, // "What's on the Tests"
    testList: [
      {
        title: { type: String, default: "" }, // e.g. "Reading Test"
        description: { type: String, default: "" }, // e.g. "Assesses the ability..."
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("AccuplacerTest", AccuplacerTestSchema);