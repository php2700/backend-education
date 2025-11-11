import mongoose from "mongoose";

const footerBannerSchema = new mongoose.Schema({
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

const FooterBannerModel = mongoose.model('footerBanner', footerBannerSchema)
export default FooterBannerModel;



