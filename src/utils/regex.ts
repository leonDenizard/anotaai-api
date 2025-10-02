const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const validateEmail = (email: string): boolean => {
    return emailRegex.test(email)
}

export const validatePassword = (password: string): boolean => {
    return passwordRegex.test(password)
}