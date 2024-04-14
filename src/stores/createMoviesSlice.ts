import { type StateCreator } from 'zustand'
import { getMovies, getGenresMovies } from '../services/MoviesSlice'
import { type MovieSerieType, type Movie, type Genre } from '../types'

export type MovieSliceType = {
  popularMovies: Movie[]
  latestMovies: MovieSerieType[]
  genres: Genre[]
  fetchMovies: (url: string) => Promise<void>
  fetchLatestMovies: (url: string) => Promise<void>
  fetchGenresMovies: (url: string) => Promise<void>
  searchByGenres: (genresID: Array<Genre['id']>) => Promise<void>
}
export const createMovieSlice: StateCreator<MovieSliceType> = (set, get) => ({
  popularMovies: [],
  latestMovies: [],
  genres: [],
  fetchMovies: async (url) => {
    const popularMovies = await getMovies(url)
    set({
      popularMovies
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
    if (genresID.length === 0) {
      console.log('Esta vacio')
    } else {
      console.log(genresID.join())
    }
  }

})
