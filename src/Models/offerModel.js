import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true,
        enum: ['new', 'hot deal', 'referral']
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    expireDate: {
        type: Date,
        required: false
    }
}, {
    timestamps: true
})

const OfferModel = mongoose.model('offer', offerSchema)
export default OfferModel;



