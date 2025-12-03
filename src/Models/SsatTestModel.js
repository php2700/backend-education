import mongoose from "mongoose";

const SsatTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" },
    heroDescription: { type: String, default: "" },

    // --- 2. About Section ---
    aboutHeading: { type: String, default: "" },
    aboutDescription: { type: String, default: "" },

    // --- 3. Levels (Elementary, Middle, Upper Boxes) ---
    levels: [
      {
        title: { type: String, default: "" },
        description: { type: String, default: "" },
      },
    ],

    // --- 4. Comparison (SSAT vs ISEE) ---
    comparisonHeading: { type: String, default: "" },
    comparisonPoints: [{ type: String }], // Array of strings

    // --- 5. Scoring Section ---
    scoringHeading: { type: String, default: "" },
    scoringCards: [
      {
        title: { type: String, default: "" },
        content: { type: String, default: "" },
      },
    ],
    scoringFooter: { type: String, default: "" },

    // --- 6. Test Structure Tables ---
    structureHeading: { type: String, default: "" },

    // Middle Level Table
    middleTable: [
      {
        section: { type: String, default: "" },
        time: { type: String, default: "" },
        questions: { type: String, default: "" },
      },
    ],

    // Upper Level Table
    upperTable: [
      {
        section: { type: String, default: "" },
        time: { type: String, default: "" },
        questions: { type: String, default: "" },
      },
    ],
  },
  { timestamps: true }
);

// Export using ES6 syntax
export default mongoose.model("SsatTest", SsatTestSchema);