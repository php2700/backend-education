import mongoose from "mongoose";

const MathKangarooTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "MATH KANGAROO TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. Test Structure ---
    structureHeading: { type: String, default: "" }, // "Test Structure"
    structureDescription: { type: String, default: "" }, // Paragraphs

    // --- 3. Features (List) ---
    featuresHeading: { type: String, default: "" }, // "Features"
    featuresList: [{ type: String }], // Bullet points

    // --- 4. General Rules (List) ---
    rulesHeading: { type: String, default: "" }, // "General Rules"
   rulesList: [
  {
    type: { type: String, default: "" },   // Rule title
    subpoints: [{ type: String, default: "" }] // Array of strings
  }
],

    // --- 5. Scoring ---
    scoringHeading: { type: String, default: "" }, // "Scoring"
    scoringDescription: { type: String, default: "" }, // Paragraphs
  },
  { timestamps: true }
);

export default mongoose.model("MathKangarooTest", MathKangarooTestSchema);