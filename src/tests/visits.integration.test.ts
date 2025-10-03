import request from "supertest"
import mongoose from "mongoose"
import {MongoMemoryServer} from "mongodb-memory-server"

import app from "../app"
import VisitsService from "../services/visits.service"
import {Visits} from "../models/visits.models"

jest.setTimeout(30000)

let mongo = MongoMemoryServer.create()

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()
  await mongoose.connect(uri)
  console.log("Mongo conectado em memória: ", uri)
})

afterAll(async () => {

  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongo.stop()
})

afterEach(async () => {
  await Visits.deleteMany({})
})


describe("Visits teste de integração", () => {

  it("GET /api/visits deve retornar o total de visitas", async () => {

    await Visits.create({ count: 1})

    const response = await request(app).get("/api/visits")
      
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true)
    expect(response.body.message).toContain("Total visits")
    expect(response.body.data).toEqual({visits: 1}) 
  })

  it("POST /api/visits deve incrementar o total de visitas", async () => {

    // await Visits.create({count: 1})

    const response = await request(app).post("/api/visits")

    expect(response.status).toBe(200)
    expect(response.body.success).toBe(true)
    expect(response.body.message).toContain("Update visits")
    expect(response.body.data).toEqual({visits: 1})
  })
})
