import VisitsService from "../services/visits.service"
import { Visits } from "../models/visits.models"

jest.mock("../models/visits.models")

describe("VisitsService", () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it("Deve criar uma visita se não existir", async () => {
        (Visits.findOne as jest.Mock).mockResolvedValue(null);

        const saveMock = jest.fn().mockResolvedValue(true);
        (Visits as any).mockImplementation(() => ({ count: 1, save: saveMock }));

        const count = await VisitsService.incrementVisit();

        expect(count).toBe(1);
        expect(saveMock).toHaveBeenCalled();
    });

    it("Deve incrementar a contagem se já existir", async () => {
        const saveMock = jest.fn().mockResolvedValue(true);
        const visitMock = { count: 5, save: saveMock };
        (Visits.findOne as jest.Mock).mockResolvedValue(visitMock);

        const count = await VisitsService.incrementVisit();

        expect(count).toBe(6);
        expect(saveMock).toHaveBeenCalled();
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