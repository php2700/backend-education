import mongoose from "mongoose";

const SatTestSchema = new mongoose.Schema(
  {
    // --- Hero Section ---
    heroTitle: {
      type: String,
      default: "",
    },
    heroSubtitle: {
      type: String,
      default: "",
    },
    heroDescription: {
      type: String,
      default: "",
    },

    // --- Features Section (Green Checkmarks) ---
    features: [
      {
        type: String,
      },
    ],

    // --- About Section ---
    aboutHeading: {
      type: String,
      default: "",
    },
    aboutDescription: {
      type: String,
      default: "",
    },

    // --- Table Section ---
    tableData: [
      {
        section: { type: String, default: "" },
        time: { type: String, default: "" },
        modules: { type: String, default: "" },
      },
    ],
      examPeriod: [
      {
        section: { type: String, default: "" },
        time: { type: String, default: "" },
        modules: { type: String, default: "" },
      },
    ],
    tableFooter: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } // CreatedAt aur UpdatedAt auto-manage karega
);

// module.exports = mongoose.model("SatTest", SatTestSchema);
const PsatTestModel = mongoose.model('PsatTest', SatTestSchema)
export default PsatTestModel;
