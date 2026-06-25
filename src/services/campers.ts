// https://campers-api.goit.study/

import axios from "axios"
import type { Camper, CampersHTTPResponse, FetchReviewsProps, FilterProps } from "../types/campers"

const api = axios.create({
    baseURL: 'https://campers-api.goit.study'
})

interface FetchCampersProps {
    pageParam?: number
    filters?: FilterProps | null;
}

export const fetchCampers = async ( {pageParam = 1, filters}:  FetchCampersProps): Promise<CampersHTTPResponse> => {
    const response = await api.get<CampersHTTPResponse>(`/campers`, {
        params: {
            perPage: 4,
            page: pageParam,
            ...filters
        }
    })

    return response.data
}

export const fetchCamperById = async (camperId: string) => {
    const response = await api.get<Camper>(`/campers/${camperId}`)

    return response.data
}

export const fetchReviews = async (camperId: string) => {
    const response = await api.get<FetchReviewsProps[]>(`/campers/${camperId}/reviews`)

    return response.data
}