import {Types} from "mongoose"
import {Users, IUsers} from "../models/users.models"
import bcrypt from "bcrypt"

export default class UsersService{

    static async create(userData: IUsers){
        const saltRound = 10
        const hashPassword = await bcrypt.hash(userData.password, saltRound)

        const user = new Users({
            ...userData,
            password: hashPassword
        })

        return user.save()
    }

    static  getAllUsers = () => Users.find({}, "-password -__v") 

    static getUserById = (id: string | Types.ObjectId ) => Users.findById(id)
        .select("-password -__v")
}