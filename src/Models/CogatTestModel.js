// import mongoose from "mongoose";

// const CogatTestSchema = new mongoose.Schema(
//   {
//     // --- 1. Hero Section ---
//     heroTitle: { type: String, default: "" }, // "COGAT TEST PREP"
//     heroDescription: { type: String, default: "" },

//     // --- 2. About CogAT ---
//     aboutHeading: { type: String, default: "" }, // "About the CogAT Test"
//     aboutDescription: { type: String, default: "" },

//     // --- 3. Test Structure (Table 1: 3 Columns) ---
//     structureHeading: { type: String, default: "" },
//     structureDescription: { type: String, default: "" },
//     structureTable: [
//       {
//         verbal: { type: String, default: "" },      // Column 1
//         quantitative: { type: String, default: "" }, // Column 2
//         nonVerbal: { type: String, default: "" },    // Column 3
//       },
//     ],

//     // --- 4. Levels & Timing (Table 2: 4 Columns) ---
//     levelsHeading: { type: String, default: "" },
//     levelsDescription: { type: String, default: "" },
//     levelsTable: [
//       {
//         grade: { type: String, default: "" },
//         level: { type: String, default: "" },
//         questions: { type: String, default: "" },
//         testTime: { type: String, default: "" },
//       },
//     ],

//     // --- 5. Scoring ---
//     scoringHeading: { type: String, default: "" }, // "How CogAT is Scored"
//     scoringDescription: { type: String, default: "" },

//     // --- 6. Where Given ---
//     locationHeading: { type: String, default: "" }, // "Where is the CogAT Given?"
//     locationDescription: { type: String, default: "" },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("CogatTest", CogatTestSchema);

import mongoose from "mongoose";

const CogatTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" },
    heroDescription: { type: String, default: "" },
    heroList: [{ type: String }], // Bullet points in Hero section

    // --- 2. What is on the CogAT Test? ---
    introHeading: { type: String, default: "" },
    introDescription: { type: String, default: "" },

    // --- 3. Structure Table (3 Columns) ---
    structureTable: [{
      verbal: { type: String, default: "" },
      quantitative: { type: String, default: "" },
      nonVerbal: { type: String, default: "" }
    }],

    // --- 4. What Does it Measure? ---
    measureHeading: { type: String, default: "" },
    measureDescription: { type: String, default: "" },

    // --- 5. How is it Administered? ---
    administerHeading: { type: String, default: "" },
    administerDescription: { type: String, default: "" },
    administerList: [{ type: String }], // Bullets for admin details

    // --- 6. Levels Table ---
    levelsHeading: { type: String, default: "" },
    levelsDescription: { type: String, default: "" },
    levelsTable: [{
      grade: { type: String, default: "" },
      level: { type: String, default: "" },
      questions: { type: String, default: "" },
      testTime: { type: String, default: "" }
    }],

    // --- 7. Question Count Info ---
    questionCountHeading: { type: String, default: "" },
    questionCountDescription: { type: String, default: "" },

    // --- 8. Battery Details (Verbal, Non-Verbal, Quant) ---
    // In sections ke liye heading aur content list store karenge
    verbalBatteryHeading: { type: String, default: "" },
    verbalBatteryList: [{ title: String, content: String }], 

    nonVerbalBatteryHeading: { type: String, default: "" },
    nonVerbalBatteryList: [{ title: String, content: String }],

    quantBatteryHeading: { type: String, default: "" },
    quantBatteryList: [{ title: String, content: String }],

    // --- 9. Scoring ---
    scoringHeading: { type: String, default: "" },
    scoringDescription: { type: String, default: "" },

    // --- 10. Location ---
    locationHeading: { type: String, default: "" },
    locationDescription: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("CogatTest", CogatTestSchema);