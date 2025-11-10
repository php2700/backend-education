import mongoose from "mongoose";

const whychooseSchema = new mongoose.Schema({
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
        required: false,
    },
}, {
    timestamps: true
})

const WhyChooseModel = mongoose.model('whychoose', whychooseSchema)
export default WhyChooseModel;



