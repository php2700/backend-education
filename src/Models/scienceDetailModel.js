import mongoose from "mongoose";

const scienceDetailSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const ScienceDetailModel = mongoose.model('scienceDetail', scienceDetailSchema)
export default ScienceDetailModel;



