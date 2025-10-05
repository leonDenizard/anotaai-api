import { NextFunction, Request, Response } from "express"
import UsersService from "../services/users.service"
import sendResponse from "../utils/response"
import { Types } from "mongoose"

import { validateEmail, validatePassword } from "../utils/regex"

export class UsersController {

    static async createUser(req: Request, res: Response, next: NextFunction) {

        try {
            const { _id, name, password, email, role, active } = req.body

            const currentRoles = ["admin", "user"]
            const existingUser = await UsersService.getByEmail(email)

            if (existingUser) {
                throw { message: "Email already registered, please use another email", statusCode: 400 }
            }

            if (role && !currentRoles.includes(role)) {
                throw { message: "Invalid role. Use 'admin' or 'user' for role", statusCode: 400 }
            }

            if (!validateEmail(email)) {
                throw { message: "Invalid email format. Use email@domain.com", statusCode: 400 }
            }

            if (!validatePassword(password)) {
                throw {
                    message:
                        "Invalid password. Use at least 8 characters, including uppercase, lowercase, numbers, and symbols.",
                    statusCode: 400,
                }
            }

            const user = await UsersService.create(req.body)
            if (!user) {
                throw { message: "Error creating user", statusCode: 400 };
            }

            return sendResponse(res, 201, true, "User created", { id: user._id, name, email, role, active })
        } catch (error: any) {

            next(error)
        }
    }

    static async getAllUsers(req: Request, res: Response, next: NextFunction) {

        try {

            const users = await UsersService.getAllUsers()

            if (!users || users.length === 0) {
                throw { message: "Users not found", statusCode: 400, details: null, data: [] }
            }

            return sendResponse(res, 200, true, "Fetching Users", users)
        } catch (error: any) {
            next(error)
        }
    }

    static async getUserById(req: Request, res: Response, next: NextFunction) {

        try {

            const { id } = req.params

            if (!id || !Types.ObjectId.isValid(id)) {
                throw { message: "Invalid ID", statusCode: 400 }
            }

            const user = await UsersService.getUserById(id)

            if (!user) {
                throw { message: "User not found", statusCode: 400 }
            }

            return sendResponse(res, 200, true, "Fetching user", user)
        } catch (error: any) {
            next(error)
        }
    }
}