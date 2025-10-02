import { Router } from "express";
import { VisitController } from "../controllers/visits.controller";

const router = Router();

router.post("/increment", VisitController.increment);
router.get("/", VisitController.getVisits);

export default router;
