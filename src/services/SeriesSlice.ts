import axios from 'axios'
import { ResponseApiPopularSerieSchema } from '../schemas'
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
