import { Request, Response } from "express"
import VisitsService from "../services/visits.service"
import sendResponse from "../utils/response"

export class VisitController {

    static async increment(req: Request, res: Response) {

        try {
            const count = await VisitsService.incrementVisit()

            return sendResponse(res, 200, true, "Update visits", {visits: count})

        } catch (error: any) {
            return sendResponse(
                res,
                500,
                false,
                "Internal server error",
                null,
                error.message || error
            )
        }
    }

    static async getVisits(req: Request, res: Response) {

        try {
            const count = await VisitsService.getVisits();

            return sendResponse(
                res,
                200,
                true,
                "Total visits",
                {visits: count},
            )
        } catch (error: any) {
            console.error("Error fetching visits:", error);
            return sendResponse(
                res,
                500,
                false,
                "Error fetching visits",
                null,
                error.message || error
            )
        }
    }
}


