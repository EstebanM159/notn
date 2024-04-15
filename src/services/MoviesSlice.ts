import axios from 'axios'
import { ResponseApiPopularMovieSchema, ResponseApiGenres } from '../schemas'
const appId = import.meta.env.VITE_API_KEY

export async function getMovies (url: string) {
  try {
    const { data } = await axios(`${url}${appId}`)
    const result = ResponseApiPopularMovieSchema.safeParse(data)
    if (result.success) {
      return result.data.results
    } else {
      console.log(result.error)
    }
  } catch (error) {
    console.log(error)
  }
}
export async function getGenresMovies (url: string) {
  try {
    const { data: { genres } } = await axios(`${url}${appId}`)
    const result = ResponseApiGenres.safeParse(genres)
    if (result.success) {
      return result.data
    } else {
      console.log(result.error)
    }
  } catch (error) {
    console.log(error)
  }
}
export async function getMoviesByGenre (genresId: string) {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genresId}&api_key=${appId}`
    const { data } = await axios(url)
    const result = ResponseApiPopularMovieSchema.safeParse(data)
    if (result.success) {
      return result.data.results
    } else {
      console.log(result.error)
    }
  } catch (error) {
    console.log(error)
  }
}
