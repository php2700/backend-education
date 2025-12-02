import mongoose from 'mongoose';

const ManagementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true, 
    trim: true
  },
  image: {
    type: String, // Yahan image ka path store hoga (e.g., "/uploads/12345.jpg")
    required: true, 
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const ManagementModel = mongoose.model('Management', ManagementSchema);
export default ManagementModel;