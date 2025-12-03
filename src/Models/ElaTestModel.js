import mongoose from "mongoose";

const ElaTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "ALL YOU NEED TO KNOW..."
    heroDescription: { type: String, default: "" },

    // --- 2. Intro Section (Left Side) ---
    introHeading: { type: String, default: "" }, // "Who takes this test?"
    introDescription: { type: String, default: "" }, // Paragraphs

    // --- 3. Sidebar (Right Side) ---
    // Box 1: Quick Facts
    quickFactsHeading: { type: String, default: "" },
    quickFactsList: [{ type: String }], // Array of strings (e.g. "Grades: 3–10")

    // Box 2: Scoring
    scoringHeading: { type: String, default: "" },
    scoringDescription: { type: String, default: "" },

    // --- 4. Middle Section (What is on the test?) ---
    testSectionHeading: { type: String, default: "" },
    
    // Core Components List
    componentsHeading: { type: String, default: "" },
    componentsPoints: [{ type: String }],

    // Test Administration List
    administrationHeading: { type: String, default: "" },
    administrationPoints: [{ type: String }],

    // --- 5. Preparation Section (3 Cards) ---
    preparationHeading: { type: String, default: "" },
    preparationCards: [
      {
        title: { type: String, default: "" }, // e.g. "Reading practice"
        description: { type: String, default: "" },
      },
    ],

    // --- 6. More Details (Image 2) ---
    moreDetailsHeading: { type: String, default: "" }, // "More details"
    moreDetailsDescription: { type: String, default: "" }, // Text above FAQ

    // FAQ / Accordion
    faqHeading: { type: String, default: "" }, // "Frequently asked"
    faqList: [
      {
        question: { type: String, default: "" },
        answer: { type: String, default: "" },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("ElaTest", ElaTestSchema);