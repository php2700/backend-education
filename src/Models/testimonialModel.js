import mongoose from "mongoose";

const testImonialSchema = new mongoose.Schema({
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
    address: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const TestImonialModel = mongoose.model('testImonial', testImonialSchema)
export default TestImonialModel;



