import { Request, Response } from "express"
import UsersService from "../services/users.service"
import sendResponse from "../utils/response"
import { Types } from "mongoose"

import { validateEmail, validatePassword } from "../utils/regex"

export class UsersController {

    static async createUser(req: Request, res: Response) {

        try {
            const { _id, name, password, email, role, active } = req.body


            if (!validateEmail(email)) { 
                return sendResponse(res, 400, false, "Invalid email format. Use email@domain.com")
            }

            if(!validatePassword(password)){
                return sendResponse(res, 400, false, "Invalid password. Use at least 8 characters, including uppercase, lowercase, numbers, and symbols.")
            }

            const user = await UsersService.create(req.body)
            if (!user) {
                return sendResponse(res, 400, false, "Error create user")
            }

            return sendResponse(res, 201, true, "User created", { id: user._id, name, email, role, active })
        } catch (error: any) {

            return sendResponse(res, 500, false, "Internal server error", null, error.message);
        }
    }

    static async getAllUsers(req: Request, res: Response){

        try {
            
            const users = await UsersService.getAllUsers()

            if(!users || users.length === 0){
                return sendResponse(res, 404, false, "Users not found", [])
            }

            return sendResponse(res, 200, true, "Fetching Users", users)
        } catch (error: any) {
            return sendResponse(res, 500, false, "Internal server error", null, error.message)
        }
    }

    static async getUserById(req: Request, res: Response){

        try {
            
            const {id} = req.params

            if(!Types.ObjectId.isValid(id)){
                return sendResponse(res, 400, false, "Invalid ID")
            }

            const user = await UsersService.getUserById(id)

            if(!user){
                return sendResponse(res, 404, false, "User not found")
            }

            return sendResponse(res, 200, true, "Fetching user", user)
        } catch (error: any) {
            return sendResponse(res, 500, false, "Internal server error", null, error.message)
        }
    }
}