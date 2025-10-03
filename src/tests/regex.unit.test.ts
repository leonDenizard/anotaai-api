import { validateEmail, validatePassword } from "../utils/regex"

describe("Validação da Regex de email e senha de criação do usuário", () => {
    
    it("Deve validar o email corretamente", () => {
        expect(validateEmail("nome@email.com")).toBe(true)
    })

    it("Deve rejeitar com e-mail incorreto", () => {
        expect(validateEmail("email.com")).toBe(false)
    })

    it("Deve rejeitar com e-mail vazio", () => {
        expect(validateEmail("")).toBe(false)
    })

    it("Deve validar a senha corretamente", () => {
        expect(validatePassword("Password123!")).toBe(true)
    })

    it("Deve rejeita com senha fora do padrão", () => {
        expect(validatePassword("password123!")).toBe(false)
    })

    it("Deve rejeita com senha vazia", () => {
        expect(validatePassword("")).toBe(false)
    })
})