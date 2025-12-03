import mongoose from "mongoose";

const CogatTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "COGAT TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. About CogAT ---
    aboutHeading: { type: String, default: "" }, // "About the CogAT Test"
    aboutDescription: { type: String, default: "" },

    // --- 3. Test Structure (Table 1: 3 Columns) ---
    structureHeading: { type: String, default: "" },
    structureDescription: { type: String, default: "" },
    structureTable: [
      {
        verbal: { type: String, default: "" },      // Column 1
        quantitative: { type: String, default: "" }, // Column 2
        nonVerbal: { type: String, default: "" },    // Column 3
      },
    ],

    // --- 4. Levels & Timing (Table 2: 4 Columns) ---
    levelsHeading: { type: String, default: "" },
    levelsDescription: { type: String, default: "" },
    levelsTable: [
      {
        grade: { type: String, default: "" },
        level: { type: String, default: "" },
        questions: { type: String, default: "" },
        testTime: { type: String, default: "" },
      },
    ],

    // --- 5. Scoring ---
    scoringHeading: { type: String, default: "" }, // "How CogAT is Scored"
    scoringDescription: { type: String, default: "" },

    // --- 6. Where Given ---
    locationHeading: { type: String, default: "" }, // "Where is the CogAT Given?"
    locationDescription: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("CogatTest", CogatTestSchema);