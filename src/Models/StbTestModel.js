import mongoose from "mongoose";

const StbTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "STB TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. About STB ---
    aboutHeading: { type: String, default: "" }, // "About the STB"
    aboutDescription: { type: String, default: "" },

    // --- 3. STB Subtests (Dynamic List) ---
    subtestHeading: { type: String, default: "" }, // "STB Subtests"
    subtests: [
      {
        title: { type: String, default: "" }, // e.g. "Visual Memory"
        content: { type: String, default: "" }, // Description text
      },
    ],

    // --- 4. Important Testing Information & Table ---
    infoHeading: { type: String, default: "" }, // "Important Testing Information"
    infoDescription: { type: String, default: "" },
    
    // Table Rows
    timeTable: [
      {
        activity: { type: String, default: "" },   // Col 1: Subtest + Tutorial
        time5th6th: { type: String, default: "" }, // Col 2: 5th/6th Graders Time
        time7thPlus: { type: String, default: "" },// Col 3: 7th Graders+ Time
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("StbTest", StbTestSchema);