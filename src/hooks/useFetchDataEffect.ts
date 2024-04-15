import { useEffect } from 'react'
import { useAppStore } from '../stores/useAppStore'
export const useFetchDataEffect = () => {
  const { fetchGenresMovies, fetchMovies } = useAppStore()

  useEffect(() => {
    fetchGenresMovies('https://api.themoviedb.org/3/genre/movie/list?api_key=')
    fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=')
  }, [])
}
