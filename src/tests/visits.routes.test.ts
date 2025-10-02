import request from "supertest"
import app from "../app"
import VisitsService from "../services/visits.service"

jest.mock("../services/visits.service")

describe("Visits Routes", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("GET /api/visits deve retornar o total de visitas", async () => {
    (VisitsService.getVisits as jest.Mock).mockResolvedValue(10)

    const response = await request(app).get("/api/visits")

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      message: expect.any(String),
      data: { visits: 10 },
      
    })
  })

  it("POST /api/visits/increment deve incrementar o total de visitas", async () => {
    (VisitsService.incrementVisit as jest.Mock).mockResolvedValue(1)

    const response = await request(app).post("/api/visits")

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      success: true,
      message: expect.any(String),
      data: {visits: 1} 
    })
  })
})
