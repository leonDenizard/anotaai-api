import { Visits } from "../models/visits.models"

export default class VisitsService{

    
    static async incrementVisit(): Promise<number>{
        let visit = await Visits.findOne()

        if(!visit){
            visit = new Visits({count: 1})
        }else{
            visit.count += 1
        }

        await visit.save()
        return visit.count
    }

    static async getVisits(): Promise<number>{
        const visit = await Visits.findOne()
        return visit ? visit.count : 0
    }
}