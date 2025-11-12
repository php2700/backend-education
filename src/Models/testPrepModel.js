import mongoose from "mongoose";

const testPrep = new mongoose.Schema({

    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const TestPrepModel = mongoose.model('testPrep', testPrep)
export default TestPrepModel;



