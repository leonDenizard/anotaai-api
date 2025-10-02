import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Express } from "express"

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Visits",
            version: "1.0.0",
            description: "Documentação da API",
        },
        servers: [{ url: "http://localhost:3000/api" }],
        components: {
            schemas: { // precisa ser "schemas" no plural
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
            },
        },
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // caminhos corretos para JSDoc
};


const swaggerSpec = swaggerJsdoc(options)

export function setupSwagger(app: Express): void {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}