import mongoose, {Schema, Document} from "mongoose"

export interface IVisits extends Document {
    count: number
    updateAt: Date
}

const visitsSchema = new Schema<IVisits>(
    {
        count: {
            type: Number,
            required: true,
            default: 0
        },
    },
    {timestamps: true}
)

export const Visits = mongoose.model<IVisits>("Visits", visitsSchema)