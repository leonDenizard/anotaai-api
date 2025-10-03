import { Router } from "express"
import {VisitController} from "../controllers/visits.controller"

const router = Router()

/**
 * @openapi
 * /visits:
 *   post:
 *     summary: Incrementa o contador de visitas
 *     description: Conta a quantidade de visitas do site
 *     tags:
 *       - Visits
 *     responses:
 *       200:
 *         description: Contador incrementado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
router.post("/", VisitController.increment)

/**
 * @openapi
 * /visits:
 *   get:
 *     summary: Retorna o total de visitas
 *     tags:
 *       - Visits
 *     responses:
 *       200:
 *         description: Total de visitas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */

router.get("/", VisitController.getVisits)

export default router
