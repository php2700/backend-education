import mongoose from "mongoose";

const commonCoreSchema = new mongoose.Schema({
    description: {
        type: [String],
        required: true,
    },
    coverDescription: {
        type: String,
        required: true,
    },
    heading:
        [
            {
                image: { type: String, required: true },
                title: { type: String, required: true }
            }
        ]
}, {
    timestamps: true
})

const CommonCoreModel = mongoose.model('commonCore', commonCoreSchema)
export default CommonCoreModel;



