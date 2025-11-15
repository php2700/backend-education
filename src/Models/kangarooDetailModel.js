import mongoose from "mongoose";

const kangarooDetail = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
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

const KangarooDetailModel = mongoose.model('kangarooDetail', kangarooDetail)
export default KangarooDetailModel;



