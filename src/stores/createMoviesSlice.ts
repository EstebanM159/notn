import { type StateCreator } from 'zustand'
import { getMovies, getGenresMovies, getMoviesByGenre } from '../services/MoviesSlice'
import { type MovieSerieType, type Movie, type Genre } from '../types'

export type MovieSliceType = {
  popularMovies: Movie[]
  latestMovies: MovieSerieType[]
  genres: Genre[]
  movies: Movie[]
  fetchMovies: (url: string) => Promise<void>
  fetchLatestMovies: (url: string) => Promise<void>
  fetchGenresMovies: (url: string) => Promise<void>
  searchByGenres: (genresID: Array<Genre['id']>) => Promise<void>
}
export const createMovieSlice: StateCreator<MovieSliceType> = (set, get) => ({
  popularMovies: [],
  latestMovies: [],
  genres: [],
  movies: [],
  fetchMovies: async (url) => {
    const popularMovies = await getMovies(url)
    set({
      popularMovies,
      movies: popularMovies
    })
  },
  fetchLatestMovies: async (url) => {
    const latestMovies = await getMovies(url)
    set({
      latestMovies
    })
  },
  fetchGenresMovies: async (url) => {
    const genres = await getGenresMovies(url)
    set({
      genres
    })
  },
  searchByGenres: async (genresID) => {
    const filtersID = genresID.join()
    // Hacer una funcion en el service con un debounce
    const filteredMovies = await getMoviesByGenre(filtersID)
    set({
      movies: filteredMovies
    })
  }
})
