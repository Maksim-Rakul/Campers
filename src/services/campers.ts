// https://campers-api.goit.study/

import axios from "axios"
import type { Camper } from "../types/campers"

interface CampersHTTPResponse {
    campers: Camper[]
}

const api = axios.create({
    baseURL: 'https://campers-api.goit.study'
})

export const fetchCampers = async (): Promise<CampersHTTPResponse> => {
    const response = await api.get<CampersHTTPResponse>('/campers?perPage=4')

    return response.data
}