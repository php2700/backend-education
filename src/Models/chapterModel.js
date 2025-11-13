import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    subjectDescription: {
        type: String,
        required: true,
    },
    chapterName: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true
})

const ChapterModel = mongoose.model('chapter', chapterSchema)
export default ChapterModel;



