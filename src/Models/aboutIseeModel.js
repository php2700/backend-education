import mongoose from "mongoose";

const aboutIseeSchema = new mongoose.Schema({
    title: {
        type: [String],
        required: true
    },
    purpose: {
        type: [String],
        required: true,
    },
   testStructure: [
        {
            heading: { type: String, required: true },
            description: { type: String, required: true }
        }
    ],
  
}, {
    timestamps: true
})

const AboutIseeModel = mongoose.model('aboutIsee', aboutIseeSchema)
export default AboutIseeModel;



