import mongoose from "mongoose";

const scienceSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    tutorDescription: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const ScienceModel = mongoose.model('science', scienceSchema)
export default ScienceModel;



