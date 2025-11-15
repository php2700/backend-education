import mongoose from "mongoose";

const aboutCoreElaSchema = new mongoose.Schema({
    coreDescription: {
        type: [String],
        required: true,
    },
    coverDescription: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const AboutCoreElaModel = mongoose.model('aboutCoreEla', aboutCoreElaSchema)
export default AboutCoreElaModel;



