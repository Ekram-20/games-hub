export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}