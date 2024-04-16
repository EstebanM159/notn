import { useEffect } from 'react'
import { useAppStore } from '../stores/useAppStore'
export const useFetchDataEffect = () => {
  const { fetchGenresMovies } = useAppStore()

  useEffect(() => {
    fetchGenresMovies('https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=')
  }, [])
}
