import mongoose from "mongoose";

const ShsatTestSchema = new mongoose.Schema(
  {
    // --- 1. Top Section (Hero) ---
    heroTitle: { type: String, default: "" }, // e.g. "SHSAT Test Prep"
    heroDescription: { type: String, default: "" }, // Paragraphs at the top

    // --- 2. About Section (Middle) ---
    aboutMainHeading: { type: String, default: "" }, // e.g. "All About SHSAT"
    
    // Dynamic List for things like "Where do you take...", "Digital update...", etc.
    aboutItems: [
      {
        title: { type: String, default: "" },   // Blue text heading
        content: { type: String, default: "" }, // Black text paragraph
      },
    ],

    // --- 3. Structure Section (Bottom) ---
    structureHeading: { type: String, default: "" }, // e.g. "SHSAT Test Structure"
    structurePoints: [{ type: String }], // Array of strings for bullet points
  },
  { timestamps: true }
);

export default mongoose.model("ShsatTest", ShsatTestSchema);