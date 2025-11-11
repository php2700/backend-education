import mongoose from "mongoose";

const mathTestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: [String],
        required: true,
    },

}, {
    timestamps: true
})

const MathTestModel = mongoose.model('mathTest', mathTestSchema)
export default MathTestModel;



