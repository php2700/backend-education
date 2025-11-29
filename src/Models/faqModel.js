import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    points: {
        type: [String],
        required: false,
        default:null
    },
}, {
    timestamps: true
})

const FaqModel = mongoose.model('faq', faqSchema)
export default FaqModel;



