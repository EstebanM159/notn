import { type StateCreator } from 'zustand'
import { getSeries } from '../services/SeriesSlice'
import { type Serie, type MovieSerieType } from '../types'
export type SeriesSliceType = {
  popularSeries: Serie[]
  latestSeries: MovieSerieType[]
  fetchPopularSeries: (url: string) => Promise<void>
  fetchLatestSeries: (url: string) => Promise<void>
}
export const createSeriesSlice: StateCreator<SeriesSliceType> = (set) => ({
  popularSeries: [],
  latestSeries: [],
  fetchPopularSeries: async (url) => {
    set({
    })
    const popularSeries = await getSeries(url)
    set({
      popularSeries
    })
  },
  fetchLatestSeries: async (url) => {
    const latestSeries = await getSeries(url)
    set({
      latestSeries
    })
  }
})
