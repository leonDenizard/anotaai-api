import { Router } from "express"
import { UsersController } from "../controllers/users.controller"

const route = Router()


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     description: Cria um novo usuário no MongoDB com validação de e-mail e senha
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       "201":
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       "400":
 *         description: Invalid input or validation failed
 *       "500":
 *         description: Internal server error
 */
route.post("/", UsersController.createUser)

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados no sistema.
 *     tags:
 *       - Users
 *     responses:
 *       "200":
 *         description: Fetching Users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       "404":
 *         description: Users not found
 *       "500":
 *         description: Internal server error
 */
route.get("/", UsersController.getAllUsers)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     description: Retorna um usuário pelo ID do MongoDB.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário (ObjectId do MongoDB)
 *         example: 68df0561d9fd2a3743651b3f
 *     responses:
 *       "200":
 *         description: Fetching user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       "400":
 *         description: Invalid ID
 *       "404":
 *         description: User not found
 *       "500":
 *         description: Internal server error
 */

route.get("/:id", UsersController.getUserById)

export default route