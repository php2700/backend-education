import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
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

const BannerModel = mongoose.model('banner', bannerSchema)
export default BannerModel;



