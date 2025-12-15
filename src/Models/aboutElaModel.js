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
    questionType: [
        {
            title: {
                type: String,
                required: true,
                trim: true,
            },
            description: {
                type: String,
                required: true,
                trim: true,
            },
        },
    ],
}, {
    timestamps: true
})

const AboutElaModel = mongoose.model('aboutEla', aboutElaSchema)
export default AboutElaModel;



