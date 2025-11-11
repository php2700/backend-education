import mongoose from "mongoose";

const tutoringSchema = new mongoose.Schema({
    bgImage: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    chapter: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})

const TutoringModel = mongoose.model('tutoring', tutoringSchema)
export default TutoringModel;



