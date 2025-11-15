import mongoose from "mongoose";

const aboutElaDetailSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const AboutElaDetailModel = mongoose.model('aboutElaDetail', aboutElaDetailSchema)
export default AboutElaDetailModel;



