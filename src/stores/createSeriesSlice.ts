import { type StateCreator } from 'zustand'
import { getSeries, getGenresSeries, getSeriesByGenre } from '../services/SeriesSlice'
import { type Serie, type MovieSerieType, type Genre } from '../types'
export type SeriesSliceType = {
  popularSeries: Serie[]
  latestSeries: MovieSerieType[]
  series: Serie[]
  genresSeries: Genre[]
  fetchPopularSeries: (url: string) => Promise<void>
  fetchLatestSeries: (url: string) => Promise<void>
  fetchGenresSeries: (url: string) => Promise<void>
  searchSeriesByGenres: (genresID: Array<Genre['id']>) => Promise <void>
}
export const createSeriesSlice: StateCreator<SeriesSliceType> = (set) => ({
  popularSeries: [],
  latestSeries: [],
  series: [],
  genresSeries: [],
  fetchPopularSeries: async (url) => {
    const popularSeries = await getSeries(url)
    set({
      popularSeries,
      series: popularSeries
    })
  },
  fetchLatestSeries: async (url) => {
    const latestSeries = await getSeries(url)
    set({
      latestSeries
    })
  },
  fetchGenresSeries: async (url) => {
    const genresSeries = await getGenresSeries(url)
    set({
      genresSeries
    })
  },
  searchSeriesByGenres: async (genresID) => {
    const filtersID = genresID.join()
    // Hacer una funcion en el service con un debounce
    const seriesFiltered = await getSeriesByGenre(filtersID)
    set({
      series: seriesFiltered
    })
  }
})
