import mongoose, {Schema, Document} from "mongoose"

export interface IUsers extends Document{
    name: string
    password: string
    email: string
    role: "user" | "admin"
    active: boolean
    createdAt: Date
    updateAt: Date
}

const UsersSchema = new Schema<IUsers>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["user", "admin"], default: "user"
    },
    active:{
        type: Boolean,
        default: true
    },

}, {timestamps: true})

export const Users = mongoose.model<IUsers>("Users", UsersSchema)