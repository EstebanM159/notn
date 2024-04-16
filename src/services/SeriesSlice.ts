import axios from 'axios'
import { ResponseApiPopularSerieSchema, ResponseApiGenres, ResponseApiSingleSerie } from '../schemas'

const appId = import.meta.env.VITE_API_KEY
export async function getSeries (url: string) {
  try {
    const { data } = await axios(`${url}${appId}`)
    const result = ResponseApiPopularSerieSchema.safeParse(data)
    if (result.success) {
      return result.data.results
    } else {
      console.log(result.error)
    }
  } catch (error) {

  }
}
export async function getGenresSeries (url: string) {
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
export async function getSeriesByGenre (genresId: string) {
  const url = `https://api.themoviedb.org/3/discover/tv?with_genres=${genresId}&api_key=${appId}`
  try {
    const { data } = await axios(url)
    const result = ResponseApiPopularSerieSchema.safeParse(data)
    if (result.success) {
      return result.data.results
    } else {
      console.log(result.error)
    }
  } catch (error) {
    console.log(error)
  }
}
export async function getSerieById (id: number) {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=`
    const { data } = await axios(`${url}${appId}`)
    const result = ResponseApiSingleSerie.safeParse(data)
    if (result.success) {
      return result.data
    } else {
      console.log(result.error)
    }
  } catch (error) {
    console.log(error)
  }
}
