import mongoose from "mongoose";

const tutoringSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    headingDescription: {
        type: String,
        required: true,
    },
    chapter: [{
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        chapterName: {
            type: [String],
            required: true
        }
    }]
}, {
    timestamps: true
})

const TutoringModel = mongoose.model('tutoring', tutoringSchema)
export default TutoringModel;



