import mongoose from "mongoose";

const contactTextSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const ContactTextModel = mongoose.model('contactText', contactTextSchema)
export default ContactTextModel;



