import {Router} from "express"
import {UsersController} from "../controllers/users.controller"

const route = Router()

route.post("/", UsersController.createUser)
route.get("/", UsersController.getAllUsers)
route.get("/:id", UsersController.getUserById)

export default route