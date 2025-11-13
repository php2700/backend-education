import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    heading:{
        type:String,
        required: true,
    }
}, {
    timestamps: true
})

const CommonLanguageModel = mongoose.model('language', languageSchema)
export default CommonLanguageModel;



