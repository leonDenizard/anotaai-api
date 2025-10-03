import request from "supertest"
import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"
import app from "../app"
import { Users } from "../models/users.models"

let mongo: MongoMemoryServer

jest.setTimeout(30000)

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()
  await mongoose.connect(uri)
  console.log("Mongo conectado em memória:", uri)
})

afterAll(async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongo.stop()
})

afterEach(async () => {
  await Users.deleteMany({})
})

describe("Users teste de integracao", () => {
  describe("POST /api/users", () => {
    it("Deve criar um novo usuario e retornar status 201", async () => {
      const response = await request(app)
        .post("/api/users")
        .send({
          name: "Seu nome",
          email: "email@email.com",
          password: "Password123!",
          role: "user",
          active: true,
        })

      expect(response.status).toBe(201)
      expect(response.body.success).toBe(true)
      expect(response.body.data).toHaveProperty("id")
      expect(response.body.data).toMatchObject({
        name: "Seu nome",
        email: "email@email.com",
        role: "user",
        active: true,
      })
    })

    it("Deve gerar erro com e-mail invalido", async () => {
      const response = await request(app)
        .post("/api/users")
        .send({
          name: "Seu nome",
          email: "invalid-email",
          password: "Password123!",
          role: "user",
        })

      expect(response.status).toBe(400)
      expect(response.body.success).toBe(false)
      expect(response.body.message).toContain("Invalid email format. Use email@domain.com")
    })

    it("Deve gerar erro com senha fora do padrão", async () => {
      const response = await request(app)
        .post("/api/users")
        .send({
          name: "Seu nome",
          email: "email@email.com",
          password: "123",
          role: "user",
        })

      expect(response.status).toBe(400)
      expect(response.body.success).toBe(false)
      expect(response.body.message).toContain("Invalid password. Use at least 8 characters, including uppercase, lowercase, numbers, and symbols.")
    })

    describe("GET /api/users", () => {
      it("Deve retornar 404 se não tiver usuários no banco", async () => {
        const response = await request(app).get("/api/users")

        expect(response.status).toBe(404)
        expect(response.body.success).toBe(false)
        expect(response.body.message).toContain("Users not found")
        expect(response.body.data).toEqual([])
      })

      it("Deve retornar a lista de usuários", async () => {
        await Users.create({
          name: "Seu nome",
          email: "nome@email.com",
          password: "hashedpassword",
          role: "user",
          active: true,
        })

        const response = await request(app).get("/api/users")

        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
        expect(response.body.message).toContain("Fetching Users")
        expect(response.body.data.length).toBe(1)
      })
    })

    describe("GET /api/users/:id", () => {
      it("Deve retornar erro 400 se o ID passado via params não for valido", async () => {
        const response = await request(app).get("/api/users/invalid-id")

        expect(response.status).toBe(400)
        expect(response.body.success).toBe(false)
        expect(response.body.message).toContain("Invalid ID")
      })

      it("Deve retornar 404 se não encontrar o usuário", async () => {
        const id = new mongoose.Types.ObjectId()
        const response = await request(app).get(`/api/users/${id}`)

        expect(response.status).toBe(404)
        expect(response.body.success).toBe(false)
        expect(response.body.message).toContain("User not found")
      })

      it("Deve retornar status 200 e o usuário encontrado", async () => {
        const user = await Users.create({
          name: "nome",
          email: "email@email.com",
          password: "hashedpassword",
          role: "admin",
          active: true,
        })

        const response = await request(app).get(`/api/users/${user._id}`)

        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
        expect(response.body.data.email).toBe("email@email.com")
      })
    })
  })
})
