// import mongoose from "mongoose";

// const SsatTestSchema = new mongoose.Schema(
//   {
//     // --- 1. Hero Section ---
//     heroTitle: { type: String, default: "" },
//     heroDescription: { type: String, default: "" },

//     // --- 2. About Section ---
//     aboutHeading: { type: String, default: "" },
//     aboutDescription: { type: String, default: "" },

//     // --- 3. Levels (Elementary, Middle, Upper Boxes) ---
//     levels: [
//       {
//         title: { type: String, default: "" },
//         description: { type: String, default: "" },
//       },
//     ],

//     // --- 4. Comparison (SSAT vs ISEE) ---
//     comparisonHeading: { type: String, default: "" },
//     comparisonPoints: [{ type: String }], // Array of strings

//     // --- 5. Scoring Section ---
//     scoringHeading: { type: String, default: "" },
//     scoringCards: [
//       {
//         title: { type: String, default: "" },
//         content: { type: String, default: "" },
//       },
//     ],
//     scoringFooter: { type: String, default: "" },

//     // --- 6. Test Structure Tables ---
//     structureHeading: { type: String, default: "" },

//     // Middle Level Table
//     middleTable: [
//       {
//         section: { type: String, default: "" },
//         time: { type: String, default: "" },
//         questions: { type: String, default: "" },
//       },
//     ],

//     // Upper Level Table
//     upperTable: [
//       {
//         section: { type: String, default: "" },
//         time: { type: String, default: "" },
//         questions: { type: String, default: "" },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// // Export using ES6 syntax
// export default mongoose.model("SsatTest", SsatTestSchema);

import mongoose from "mongoose";

const SsatTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" },
    heroDescription: { type: String, default: "" },
    topCtaText: { type: String, default: "" }, // NEW: Top Button Text

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

    // --- 4. Registration Section ---
    registrationHeading: { type: String, default: "" }, // NEW
    registrationContent: { type: String, default: "" }, // NEW

    // --- 5. Comparison (SSAT vs ISEE) ---
    comparisonHeading: { type: String, default: "" },
    comparisonDescription: { type: String, default: "" }, // NEW: Intro text paragraph
    comparisonPoints: [{ type: String }], // Array of bullet points

    // --- 6. Quick Facts (NEW SECTION) ---
    factsHeading: { type: String, default: "" }, // NEW
    factsContent: { type: String, default: "" }, // NEW: The list of facts
    disclaimer: { type: String, default: "" },   // NEW: Bottom disclaimer text

    // --- 7. Scoring Section ---
    scoringHeading: { type: String, default: "" },
    scoringCards: [
      {
        title: { type: String, default: "" },
        content: { type: String, default: "" },
      },
    ],
    scoringFooter: { type: String, default: "" },

    // --- 8. Test Structure Tables ---
    structureHeading: { type: String, default: "" },

    // Middle Level Table
    middleTable: [
      {
        section: { type: String, default: "" },
        time: { type: String, default: "" },
        questions: { type: String, default: "" },
        download: { type: String, default: "" }
      
      },
    ],

    // Upper Level Table
    upperTable: [
      {
        section: { type: String, default: "" },
        time: { type: String, default: "" },
        questions: { type: String, default: "" },
        download: { type: String, default: "" }

      },
    ],

    // --- 9. Good Score & Footer Section (NEW FIELDS) ---
    goodScoreHeading: { type: String, default: "" },
    goodScoreIntro: { type: String, default: "" },
    scaledScoresContent: { type: String, default: "" },
    percentileRanksContent: { type: String, default: "" },
    footerCtaText: { type: String, default: "" }, // NEW: Bottom Button Text
  },
  { timestamps: true }
);

// Export using ES6 syntax
export default mongoose.model("SsatTest", SsatTestSchema);