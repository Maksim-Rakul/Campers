export interface FilterProps {
  form: string;
  engine: string;
  tranmision: string;
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
}