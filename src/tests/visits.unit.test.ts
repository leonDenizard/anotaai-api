import VisitsService from "../services/visits.service"
import { Visits } from "../models/visits.models"

jest.mock("../models/visits.models")

describe("VisitsService", () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it("Deve criar uma visita se não existir", async () => {
        (Visits.findOneAndUpdate as jest.Mock).mockResolvedValue({ count: 1});

        const count = await VisitsService.incrementVisit();

        expect(count).toBe(1);
    });

    it("Deve incrementar a contagem se já existir", async () => {
        const visitMock = { count: 6};
        (Visits.findOneAndUpdate as jest.Mock).mockResolvedValue(visitMock);

        const count = await VisitsService.incrementVisit();

        expect(count).toBe(6);
    });

    it("Deve buscar o total de visitas do site", async() => {
        (Visits.findOne as jest.Mock).mockResolvedValue({ count: 1 })

        const result = await VisitsService.getVisits()

        expect(result).toBe(1)
        expect(Visits.findOne).toHaveBeenCalled()
    })

    it("Deve retornar 0 quando não existir nenhum acesso", async () => {
        (Visits.findOne as jest.Mock).mockResolvedValue(null)

        const result = await VisitsService.getVisits()

        expect(result).toBe(0)
        expect(Visits.findOne).toHaveBeenCalled()
    })
})