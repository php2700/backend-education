import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    planName: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: true,
    },
    fees: {
        type: [{
            label:{
  type: String,
        required: true,
            },price:{
  type: String,
        required: true,
            }
        }],
        required: false,
    },
    feesPerHour: {
        type: String,
        required: false,
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



