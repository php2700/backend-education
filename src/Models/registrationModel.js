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



