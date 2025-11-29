import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: false,
        },
        description: {
            type: [String],
            required: true,
        },
        whyUsDescription: {
            type: [String],
            required: true,
        },
        howDiffrentDescription: {
            type: [String],
            required: true,
        },
        safetyDescription: {
            type: [String],
            required: true,
        },
        tutorDescription: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const AboutModel = mongoose.model("about", aboutSchema);
export default AboutModel;
