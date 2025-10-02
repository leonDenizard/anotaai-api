import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Express } from "express"

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Anota Ai - API",
            version: "1.0.0",
            description: "Documentação da API projetada pra contablizar a quantidade de acessos ao site e cadastros de usuários",
            contact: {
                name: "Leon Denizard / integracao@anota.ai",
                email: "integracao@anota.ai"
            },
        },
        externalDocs: {
            description: "Github",
            url: "https://github.com/leonDenizard"
        },
        servers: [{ url: "http://localhost:3000/api" }],
        components: {
            schemas: {
                ApiResponse: {
                    type: "object",
                    properties: {
                        success: { type: "boolean", example: true },
                        message: { type: "string", example: "Visita incrementada" },
                        data: { type: "object", additionalProperties: true, nullable: true, example: { visits: 5 } },
                        errors: { type: ["string", "object"], nullable: true, example: null },
                    },
                    required: ["success", "message", "data", "errors"],
                },
                User: {
                    type: "object",
                    properties: {
                        id: { type: "string", example: "6512bd43d9caa6e02c990b0a" },
                        name: { type: "string", example: "Nome do usuário" },
                        email: { type: "string", example: "email@email.com" },
                        role: { type: "string", example: "admin || user" },
                        active: { type: "boolean", example: true }
                    },
                    required: ["id", "name", "email", "role", "active"]
                }
            },
        },
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // caminhos corretos para JSDoc
};


const swaggerSpec = swaggerJsdoc(options)

export function setupSwagger(app: Express): void {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}