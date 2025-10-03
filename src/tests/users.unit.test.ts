import UsersService from "../services/users.service"
import { Users } from "../models/users.models"
import bcrypt from "bcrypt"

// Mock do bcrypt.hash
jest.mock("bcrypt", () => ({
    hash: jest.fn().mockResolvedValue("hashedPassword123"),
}))

describe("UsersService - Unit Tests", () => {
    afterEach(() => jest.clearAllMocks())

    it("Deve criar um usuário com hashed password", async () => {
        const mockUser = {
            _id: "123",
            name: "name",
            email: "email@email.com",
            password: "hashedPassword123",
            role: "user",
            active: true,
        }

        // mock do método save
        jest.spyOn(Users.prototype, "save").mockResolvedValue(mockUser as any)

        const result = await UsersService.create({
            name: "name",
            email: "email@email.com",
            password: "PlainPassword123!",
            role: "user",
            active: true,
        } as any)

        // Verificando se bcrypt foi chamado
        expect(bcrypt.hash).toHaveBeenCalledWith("PlainPassword123!", 10)

        expect(result).toEqual(mockUser)

        expect(Users.prototype.save).toHaveBeenCalled()
    })

    it("Deve retornar lista de usuários", async () => {
        const mockUsers = [
            { _id: "1", name: "User1" },
            { _id: "2", name: "User2" },
        ]


        jest.spyOn(Users, "find").mockResolvedValue(mockUsers as any)

        const result = await UsersService.getAllUsers()

        expect(result).toEqual(mockUsers)
        expect(Users.find).toHaveBeenCalled()
    })

    it("Deve retornar um usuário pelo ID", async () => {
        const mockUser = { _id: "123", name: "User Test" }

        // Mock do findById().select()
        jest.spyOn(Users, "findById").mockReturnValue({
            select: jest.fn().mockResolvedValue(mockUser),
        } as any)

        const result = await UsersService.getUserById("123")

        expect(result).toEqual(mockUser)
        expect(Users.findById).toHaveBeenCalledWith("123")
    })
})
