import mongoose from "mongoose";

const planSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
        enum: ['month', 'quarter', 'half year', 'year']
    },
    feature: {
        type: [String],
        required: true,
    }
}, {
    timestamps: true
})

const PlanModel = mongoose.model('plan', planSchema)
export default PlanModel;



