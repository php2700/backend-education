import mongoose from "mongoose";

const ActTestSchema = new mongoose.Schema(
  {
    // --- 1. Hero Section ---
    heroTitle: { type: String, default: "" }, // "ACT TEST PREP"
    heroDescription: { type: String, default: "" },

    // --- 2. All About ACT ---
    aboutHeading: { type: String, default: "" }, // "All About ACT"
    aboutDescription: { type: String, default: "" }, // Paragraph content
    aboutList: [{
      title: {
        type: String, default: ""
      }, description: {
        type: String, default: ""
      }
    }],
    actHeading: { type: String, default: "" },
    // --- 3. ACT Test Structure (Bullet Points) ---
    additionalInfo: { type: String, default: "" },
    additionalInfoList: [
      {
        title: {
          type: String, default: ""
        }, description: {
          type: String, default: ""
        }
      },
    ],
    actList: [
      {
        title: {
          type: String, default: ""
        }, description: {
          type: String, default: ""
        }
      }
    ]

    // --- 4. New ACT Changes in 2025 (Numbered List) ---
    // "New ACT Changes in 2025"
  },
  { timestamps: true }
);

export default mongoose.model("ActTest", ActTestSchema);