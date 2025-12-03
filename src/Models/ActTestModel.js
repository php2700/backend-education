import mongoose from "mongoose";

const ActTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "ACT TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. All About ACT ---
    aboutHeading: { type: String, default: "" }, // "All About ACT"
    aboutDescription: { type: String, default: "" }, // Paragraph content

    // --- 3. ACT Test Structure (Bullet Points) ---
    structureHeading: { type: String, default: "" }, // "ACT Test Structure"
    structurePoints: [{ type: String }], // Array of strings

    // --- 4. New ACT Changes in 2025 (Numbered List) ---
    changesHeading: { type: String, default: "" }, // "New ACT Changes in 2025"
    changesPoints: [{ type: String }], // Array of strings
  },
  { timestamps: true }
);

export default mongoose.model("ActTest", ActTestSchema);