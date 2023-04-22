import axios from "axios";


export const AxiosInstace = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
})

export function AxiosFIns(url) {
    return (
        axios.create({
            baseURL: 'http://localhost:8080',
            timeout: 5000,
        })
    )
}

