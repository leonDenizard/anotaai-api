import { NextFunction, Request, Response } from "express"
import VisitsService from "../services/visits.service"
import sendResponse from "../utils/response"

export class VisitController {

    static async increment(req: Request, res: Response, next: NextFunction) {

        try {
            const count = await VisitsService.incrementVisit()

            return sendResponse(res, 200, true, "Update visits", {visits: count})

        } catch (error: any) {
            next(error)
        }
    }

    static async getVisits(req: Request, res: Response, next: NextFunction) {

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
            next(error)
        }
    }
}


