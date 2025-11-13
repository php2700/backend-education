import mongoose from "mongoose";

const aboutElaSchema = new mongoose.Schema({
    testPrepDescription: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    whoTake: {
        type: String,
        required: true,
    },
    questionType: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true
})

const AboutElaModel = mongoose.model('aboutEla', aboutElaSchema)
export default AboutElaModel;



