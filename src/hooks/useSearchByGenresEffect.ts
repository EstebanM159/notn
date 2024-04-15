/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from 'react'
import { type Genre } from '../types'
export const useSearchByGenresEffect = (filters: Array<Genre['id']>, searchByGenres: Function, setLoading: Function) => {
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      searchByGenres(filters)
      setLoading(false)
    }, 500)
  }, [filters])
}
