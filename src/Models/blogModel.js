import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false
    },
    video: {
        type: String,
        required: false
    },
    type: {
        type: String,
        enum: ['video', 'image'],
        default: 'image'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const BlogModel = mongoose.model('blog', blogSchema)
export default BlogModel;



