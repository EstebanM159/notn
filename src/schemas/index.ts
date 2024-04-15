import { z } from 'zod'
export const ResponseApiMovieSchema = z.object({
  id: z.number(),
  backdrop_path: z.string().nullable(),
  original_title: z.string(),
  overview: z.string(),
  release_date: z.string(),
  poster_path: z.string().nullable(),
  title: z.string()
})

export const ResponseApiPopularMovieSchema = z.object({
  page: z.number(),
  results: z.array(ResponseApiMovieSchema),
  total_pages: z.number(),
  total_results: z.number()
})
export const ResponseApiSerieSchema = z.object({
  id: z.number(),
  backdrop_path: z.string().nullable(),
  //   genre_ids: z.array(z.number),
  original_name: z.string(),
  overview: z.string(),
  first_air_date: z.string(),
  poster_path: z.string().nullable(),
  name: z.string()
})
export const ResponseApiPopularSerieSchema = z.object({
  page: z.number(),
  results: z.array(ResponseApiSerieSchema),
  total_pages: z.number(),
  total_results: z.number()
})
export const ResponseApiGenreSchema = z.object({
  id: z.number(),
  name: z.string()
})
export const ResponseApiGenres = z.array(ResponseApiGenreSchema)
