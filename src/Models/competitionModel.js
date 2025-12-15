import mongoose from "mongoose";

const competitionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    condition: {
        type: [String],
        required: true,
    },
    whyTake: {
        type: [String],
        required: true,
    },
    competition: [
        {
             title:{ type: String, required: false },
            amc: { type: String, required: true },
            description: { type: String, required: true },
            for: { type: String, required: true },
            when: { type: String, required: true }
        }
    ]
}, {
    timestamps: true
})

const CompetitionModel = mongoose.model('competition', competitionSchema)
export default CompetitionModel;



