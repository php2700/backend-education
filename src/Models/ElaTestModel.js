import mongoose from "mongoose";

const ElaTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "ALL YOU NEED TO KNOW..."
    heroDescription: { type: String, default: "" },

    // --- 2. Intro Section (Left Side) ---
    introHeading: { type: String, default: "" }, // "Who takes this test?"
    introDescription: { type: String, default: "" }, // Paragraphs

    administrationHeading: { type: String, default: "" },
    administrationPoints: [
      {
        title: {
          type: String, default: ""
        },
        description: {
          type: String, default: ""
        }
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("ElaTest", ElaTestSchema);
