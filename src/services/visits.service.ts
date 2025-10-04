import { Visits } from "../models/visits.models"

export default class VisitsService{

    
    static async incrementVisit(): Promise<number>{

        const updated = await Visits.findOneAndUpdate(
            {},
            { $inc: {count: 1 }},
            { new: true, upsert: true}
        )

        return updated.count
    }

    static async getVisits(): Promise<number>{
        const visit = await Visits.findOne()
        return visit ? visit.count : 0
    }
}