import { getBackdropPath, parseRatings } from "../utils/parser"

interface Genre {
    name: string
    id: number
}

interface Production {
    name: string
    id: number
  }

export interface ITVshow {
    name: string
    first_air_date: string
    overview: string
    genres: Genre[]
    number_of_seasons: number
    vote_average: number
    production_companies: Production[] 
    backdrop_path: string
    poster_path: string
    id: number
}

export class TvShow {
    name: ITVshow['name']
    backdrop: ITVshow['backdrop_path']
    poster: ITVshow['poster_path']
    genres: ITVshow['genres']
    seasons: ITVshow['number_of_seasons']
    rating: ITVshow['vote_average']
    production: ITVshow['production_companies']
    date: ITVshow['first_air_date']
    description: ITVshow['overview']
    id: ITVshow['id']
    constructor(from: ITVshow) {
        this.name = from.name
        this.genres = from.genres
        this.seasons = from.number_of_seasons
        this.production = from.production_companies
        this.backdrop = getBackdropPath(from.backdrop_path, 'w1280')
        this.poster = getBackdropPath(from.poster_path, 'w780')
        this.rating = parseRatings(from.vote_average)  
        this.date = String(new Date(from.first_air_date).getFullYear())
        this.description = from.overview
        this.id = from.id 
    }
}