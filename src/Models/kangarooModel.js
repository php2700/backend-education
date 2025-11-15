import mongoose from "mongoose";

const kangarooSchema = new mongoose.Schema({
    testPrepDescription: {
        type: String,
        required: true,
    },
    testStructureDescription: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true
})

const KangarooModel = mongoose.model('kangaroo', kangarooSchema)
export default KangarooModel;



