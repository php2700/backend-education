import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({

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

const RegistrationModel = mongoose.model('registration', registrationSchema)
export default RegistrationModel;

const measureSchema = new mongoose.Schema(
    {
        title1: {
            type: String,
            default: "",
        },
        description1: {
            type: String,
            default: "",
        },

        title2: {
            type: String,
            default: "",
        },
        description2: {
            type: String,
            default: "",
        },

        title3: {
            type: String,
            default: "",
        },
        description3: {
            type: String,
            default: "",
        },

        title4: {
            type: String,
            default: "",
        },
        description4: {
            type: String,
            default: "",
        },

        title5: {
            type: String,
            default: "",
        },
        description5: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

export const MeasureModel = mongoose.model("measure", measureSchema);

