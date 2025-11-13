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
    data: [
        {
            title: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            points: {
                type: [String],
                required: true,
            }
        }
    ]
}, {
    timestamps: true
})

const KangarooModel = mongoose.model('kangaroo', kangarooSchema)
export default KangarooModel;



