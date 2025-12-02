import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema({
  subtitle: {
    type: String, 
    trim: true,
    default: "" // e.g., "100% Money Back Guarantee"
  },
  desc: {
    type: String,
    required: true, 
    trim: true // The detailed text for this point
  }
});

const TermsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // e.g., "FEES AND PAYMENTS"
  },
  description: {
    type: String,
    trim: true, // Main introductory paragraph
    default: "" 
  },
  points: [PointSchema], // Array of sub-points
}, { timestamps: true });

const TermsModel = mongoose.model('TermsModel', TermsSchema);

export default TermsModel;
