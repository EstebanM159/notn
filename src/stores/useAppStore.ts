import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type MovieSliceType, createMovieSlice } from './createMoviesSlice'
import { type SeriesSliceType, createSeriesSlice } from './createSeriesSlice'
export const useAppStore = create<MovieSliceType & SeriesSliceType>()(devtools((...a) => ({
  ...createMovieSlice(...a),
  ...createSeriesSlice(...a)
})))
