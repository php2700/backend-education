import mongoose from "mongoose";

const IseeTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "ISEE Test Prep"
    heroDescription: { type: String, default: "" },

    // --- 2. All About ISEE Section ---
    aboutHeading: { type: String, default: "" },
    aboutDescription: { type: String, default: "" },
 // Bullet points list
    aboutFooter: { type: String, default: "" }, // "Different levels are offered..."

    // --- 3. Purpose Section ---
    purposeHeading: { type: String, default: "" },
    purposePoints: [{ type: String }],

    // --- 4. Test Structure & Levels ---
    structureHeading: { type: String, default: "" },
    structureList: [
      {
        title:{ type: String, default: "" },
        description:{ type: String, default: "" }
      }
    ], // "The ISEE has four levels:"

    // --- 5. What Sections Measure ---
    measureHeading: { type: String, default: "" },
    measureList:  [
      {
        title:{ type: String, default: "" },
        description:{ type: String, default: "" }
      }
    ], // e.g. "Verbal Reasoning: Vocabulary..."

    // --- 6. Registration Details ---
    registrationHeading: { type: String, default: "" },
    registrationDescription: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("IseeTest", IseeTestSchema);