import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    image: {
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
     image1: {
        type: String,
        required: true
    },
    title1: {
        type: String,
        required: true,
    },
    description1: {
        type: [String],
        required: true,
    },
    image2: {
        type: String,
        required: true
    },
    title2: {
        type: String,
        required: true,
    },
    description2: {
        type: [String],
        required: true,
    },
    image3: {
        type: String,
        required: true
    },
    title3: {
        type: String,
        required: true,
    },
    description3: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true
})

const K12ServiceModel = mongoose.model('k-12', serviceSchema)
export default K12ServiceModel;



const methodologySchema = new mongoose.Schema({
    image: {
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
}, {
    timestamps: true
})

export const MethodologyModel = mongoose.model('methodology', methodologySchema)

