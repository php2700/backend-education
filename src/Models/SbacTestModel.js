import mongoose from "mongoose";

const SbacTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "SBAC TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. About SBAC ---
    aboutHeading: { type: String, default: "" }, // "About SBAC"
    aboutDescription: { type: String, default: "" }, // Text paragraphs

    // --- 3. SBAC Assessment Details (List) ---
    assessmentHeading: { type: String, default: "" }, // "SBAC Assessment Details"
    assessmentDescription: { type: String }, // Bullet points

    // --- 4. Accessibility Resources (List) ---
    assessmentPoints: [
      {
        title:
          { type: String, default: "" },
        description: {
          type: String, default: ""
        }
      }]
  },
  { timestamps: true }
);

export default mongoose.model("SbacTest", SbacTestSchema);