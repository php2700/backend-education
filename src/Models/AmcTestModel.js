import mongoose from "mongoose";

const AmcTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "AMC TEST PREP"
    heroDescription: { type: String, default: "" }, // "At GGES, we have..."

    // --- 2. About AMC Test ---
    aboutHeading: { type: String, default: "" }, // "About AMC Test"
    aboutDescription: { type: String, default: "" },

    // --- 3. Who Can Participate (List) ---
    participationHeading: { type: String, default: "" }, // "Who Can Participate?"
    participationPoints: [{ type: String }], // Array for bullet points

    // --- 4. Different AMC Competitions (Cards) ---
    competitionsHeading: { type: String, default: "" }, // "Different AMC Competitions"
    competitionCards: [
      {
        title: { type: String, default: "" }, // e.g. "AMC 8"
        description: { type: String, default: "" }, // "25-question..."
        whenText: { type: String, default: "" }, // "When: January annually"
        whoText: { type: String, default: "" },  // "Who: Middle school..."
      },
    ],

    // --- 5. Why Take AMC? ---
    whyHeading: { type: String, default: "" }, // "Why Take AMC?"
    whyDescription: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("AmcTest", AmcTestSchema);