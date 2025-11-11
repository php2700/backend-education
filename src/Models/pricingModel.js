import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true,
    },
    fees: {
        type: String,
        required: true,
    },
    feesPerHour: {
        type: String,
        required: true,
    },
    off: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
})

const PricingModel = mongoose.model('pricing', pricingSchema)
export default PricingModel;



