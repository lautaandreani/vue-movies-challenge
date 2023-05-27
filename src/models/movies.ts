import { MainMovie } from '../components'
import { parseMinutes, parseRatings, getBackdropPath, parseCurrency } from '../utils/parser'

export interface MainMovie {
  title: string
  vote_average: number
  release_date: number
  runtime?: string | null
  overview: string
  backdrop_path: string
  id: string
  poster_path: string
}

export class Movie {
  title: MainMovie['title']
  rating: MainMovie['vote_average']
  date: MainMovie['release_date']
  duration: MainMovie['runtime']
  description: MainMovie['overview']
  backdrop: MainMovie['backdrop_path']
  poster: MainMovie['poster_path']
  id: MainMovie['id']
  constructor(from: MainMovie) {
    this.title = from.title
    this.rating = parseRatings(from.vote_average)
    this.date = new Date(from.release_date).getFullYear()
    this.duration = from.runtime ? parseMinutes(from.runtime) : null
    this.description = from.overview
    this.backdrop = getBackdropPath(from.backdrop_path, 'w1280')
    this.poster = getBackdropPath(from.poster_path, 'w780')
    this.id = from.id
  }
}

interface Genre {
  name: string
  id: number
}

interface Production {
  name: string
  id: number
}

export interface MovieData extends MainMovie {
  budget?: number | null
  genres: Genre[]
  homepage: URL
  production_companies: Production[]
}

export class MovieInfo extends Movie {
  budget: MovieData['budget']
  genres: MovieData['genres']
  homepage: MovieData['homepage']
  production: MovieData['production_companies']
  constructor(from: MovieData) {
    super(from)
    this.budget = from.budget ? parseCurrency(from.budget) as unknown as number : null
    this.genres = from.genres
    this.homepage = from.homepage
    this.production = from.production_companies.map(({ name, id }) => ({ name, id }))
  }
}
