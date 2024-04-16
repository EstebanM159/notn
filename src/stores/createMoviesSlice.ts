import { type StateCreator } from 'zustand'
import { getMovies, getGenresMovies, getMoviesByGenre, getMovieById } from '../services/MoviesSlice'
import { getSerieById } from '../services/SeriesSlice'
import { type MovieSerieType, type Movie, type Genre, type SingleMovieSerie } from '../types'

export type MovieSliceType = {
  popularMovies: Movie[]
  latestMovies: MovieSerieType[]
  genres: Genre[]
  movies: Movie[]
  modal: boolean
  loading: boolean
  contentModal: SingleMovieSerie
  fetchMovies: (url: string) => Promise<void>
  fetchLatestMovies: (url: string) => Promise<void>
  fetchGenresMovies: (url: string) => Promise<void>
  searchByGenres: (genresID: Array<Genre['id']>) => Promise<void>
  showModal: (id: Genre['id'], isMovie: boolean) => Promise<void>
  closeModal: () => void
}
export const createMovieSlice: StateCreator<MovieSliceType> = (set) => ({
  popularMovies: [],
  latestMovies: [],
  genres: [],
  movies: [],
  modal: false,
  loading: false,
  contentModal: {} as SingleMovieSerie,
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
  },
  showModal: async (id, isSerie) => {
    set({
      modal: true,
      loading: true
    })
    if (isSerie) {
      const contentModal = await getSerieById(id)
      set({
        contentModal,
        loading: false
      })
    } else {
      const contentModal = await getMovieById(id)
      set({
        contentModal,
        loading: false
      })
    }
  },
  closeModal: () => {
    set({
      modal: false,
      contentModal: {} as SingleMovieSerie
    })
  }
})
