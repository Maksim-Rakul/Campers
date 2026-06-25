export interface FilterProps {
  form: "alcove" | "panel_van" | "integrated" | "semi_integrated";
  engine: 'diesel' | 'petrol' | 'hybrid' | 'electric'
  transmission: 'automatic' | 'manual';
}

export interface CampersHTTPResponse {
    campers: Camper[]
    totalPages: number;
    page: number
}

export interface CamperPicture {
    id: string
    original: string;
    thumb: string;
}

export interface Camper {
    id: string;
    coverImage: string;
    name: string;
    price: string;
    rating: number;
    totalReviews: number;
    location: string;
    description: string;
    transmission: string;
    form: string;
    engine: string;
    gallery: CamperPicture[];
    amenities: string[];
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string
}

export interface FetchReviewsProps {
    id: string
    camperId: string
    reviewer_name: string
    reviewer_rating: string
    comment: string
    createdAt: string
}