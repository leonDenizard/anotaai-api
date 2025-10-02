import { Response } from "express"

interface ApiResponse<T = any>{
    success: boolean,
    message: string,
    data: T | null
    errors: string | object | null 
}

const sendResponse = <T>(
    res: Response,
    status: number,
    success: boolean,
    message: string,
    data: T | null = null,
    errors: string | object | null
) => {
    const response: ApiResponse<T> = {success, message, data, errors}
    return res.status(status).json(response)
}

export default sendResponse