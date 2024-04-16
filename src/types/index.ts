import { type z } from 'zod'
import { type ResponseApiGenreSchema, type ResponseApiMovieSchema, type ResponseApiSerieSchema } from '../schemas'
export type Movie = z.infer<typeof ResponseApiMovieSchema>
export type Serie = z.infer<typeof ResponseApiSerieSchema>
export type Genre = z.infer<typeof ResponseApiGenreSchema>
export type MovieSerieType = {
  id: number
  backdrop_path: string | null
  overview: string
  poster_path: string | null
  original_title?: string
  original_name?: string
  release_date?: string
  first_air_date?: string
  title?: string
  name?: string
}
export type SingleMovieSerie = {
  id: number
  backdrop_path: string | null
  overview: string
  poster_path: string | null
  original_title?: string
  genres: Genre[]
  original_name?: string
  release_date?: string
  first_air_date?: string
  title?: string
  name?: string
  popularity: number
}
