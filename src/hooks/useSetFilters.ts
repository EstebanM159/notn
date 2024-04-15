import { useState } from 'react'
import { type Genre } from '../types'
export const useSetFilters = () => {
  const [filters, setFilters] = useState<Array<Genre['id']>>([])
  const handleClick = (genre: Genre['id']) => {
    setFilters(prevFilters =>
      prevFilters.includes(genre)
        ? prevFilters.filter(fil => fil !== genre)
        : [...prevFilters, genre]
    )
  }
  return {
    handleClick,
    filters
  }
}
