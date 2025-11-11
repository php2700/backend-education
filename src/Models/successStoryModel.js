import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const StoryModel = mongoose.model('story', storySchema)
export default StoryModel;



