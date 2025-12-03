import mongoose from "mongoose";

const IseeTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "ISEE Test Prep"
    heroDescription: { type: String, default: "" },

    // --- 2. All About ISEE Section ---
    aboutHeading: { type: String, default: "" },
    aboutDescription: { type: String, default: "" },
    aboutPoints: [{ type: String }], // Bullet points list
    aboutFooter: { type: String, default: "" }, // "Different levels are offered..."

    // --- 3. Purpose Section ---
    purposeHeading: { type: String, default: "" },
    purposePoints: [{ type: String }],

    // --- 4. Test Structure & Levels ---
    structureHeading: { type: String, default: "" },
    structureLevelIntro: { type: String, default: "" }, // "The ISEE has four levels:"
    structureLevels: [{ type: String }], // List of Levels
    structureSectionIntro: { type: String, default: "" }, // "The test includes five sections:"
    structureSections: [{ type: String }], // List of Sections

    // --- 5. What Sections Measure ---
    measureHeading: { type: String, default: "" },
    measurePoints: [{ type: String }], // e.g. "Verbal Reasoning: Vocabulary..."

    // --- 6. Registration Details ---
    registrationHeading: { type: String, default: "" },
    registrationDescription: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("IseeTest", IseeTestSchema);