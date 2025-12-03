import mongoose from "mongoose";

const ScatTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "SCAT TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. All About SCAT ---
    aboutHeading: { type: String, default: "" }, // "All You Need To Know..."
    aboutDescription: { type: String, default: "" },
    versionsHeading: { type: String, default: "" }, // "Three Versions of SCAT"
    versionsList: [{ type: String }], // Bullet points (Grades 2-3 etc)

    // --- 3. Test Format (Verbal & Quant Cards) ---
    formatHeading: { type: String, default: "" },
    formatDescription: { type: String, default: "" },
    formatSections: [
      {
        title: { type: String, default: "" }, // e.g., "Verbal Section"
        description: { type: String, default: "" },
      },
    ],

    // --- 4. Scoring & Levels (3 Cards) ---
    scoringHeading: { type: String, default: "" },
    scoringLevels: [
      {
        title: { type: String, default: "" }, // e.g., "Elementary Level"
        details: { type: String, default: "" }, // Verbal/Quant scores text
      },
    ],
    scoringFooter: { type: String, default: "" },

    // --- 5. SCAT Test Tips ---
    tipsHeading: { type: String, default: "" },
    tipsList: [{ type: String }], // Bullet points

    // --- 6. How To Register ---
    registerHeading: { type: String, default: "" },
    registerSubHeading: { type: String, default: "" }, // "Schedule your test..."
    registerContactList: [{ type: String }], // Online, Phone, Fee
    registerAuthNote: { type: String, default: "" }, // "You must have a 9-digit..."
    registerGetFromList: [{ type: String }], // Mail, Email, Portal list
  },
  { timestamps: true }
);

export default mongoose.model("ScatTest", ScatTestSchema);