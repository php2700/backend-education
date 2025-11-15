import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    property1: {
        type: String,
        required: true,
    },
    property2: {
        type: String,
        required: true,
    },
    property3: {
        type: String,
        required: true,
    },
    property4: {
        type: String,
        required: true,
    }
    ,
    property5: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const LanguageModel = mongoose.model('language', languageSchema)
export default LanguageModel;



