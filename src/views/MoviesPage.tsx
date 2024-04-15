import { useEffect, useState } from 'react'
import { useAppStore } from '../stores/useAppStore'
import { type Genre } from '../types'
import Spinner from '../icons/Spinner'
export default function MoviesPage () {
  const [loading, setLoading] = useState(false)
  const { fetchMovies, fetchGenresMovies, genres, movies, searchByGenres } = useAppStore()
  const [filters, setFilters] = useState<Array<Genre['id']>>([])
  useEffect(() => {
    fetchGenresMovies('https://api.themoviedb.org/3/genre/movie/list?api_key=')
    fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=')
  }, [])
  const handleClick = (genre: Genre['id']) => {
    setFilters(prevFilters =>
      prevFilters.includes(genre)
        ? prevFilters.filter(fil => fil !== genre)
        : [...prevFilters, genre]
    )
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      searchByGenres(filters)
      setLoading(false)
    }, 500)
  }, [filters])
  return (
    <>
    <h2 className='text-xl mb-3 mx-8'>Generos</h2>
    <div className='mx-8 items-center'>
      <ul className='flex gap-2 overflow-scroll no-scrollbar'>
        {genres.map(genre => (
          <li key={genre.id}
              className={filters.includes(genre.id)
                ? 'bg-white text-black h-fit py-1 px-2 rounded-lg font-normal text-sm cursor-pointer  text-center text-nowrap'
                : 'bg-gray-950 h-fit py-1 px-2 rounded-lg font-extralight text-sm cursor-pointer text-center text-nowrap'}
              onClick={() => { handleClick(genre.id) }}>
              {genre.name}
          </li>
        ))}
      </ul>
    </div>
    <h3 className='text-4xl text-center my-5'>Peliculas</h3>
       {
        loading
          ? <Spinner/>
          : <section className='grid grid-cols-4 mx-8 gap-4'>
          {movies.map(movie => (
            <div className="flex flex-col gap-2" key={movie.id}>
              <p className='text-center whitespace-nowrap overflow-hidden'>{movie.title}</p>
              <img className='rounded-lg' src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="" />
            </div>
          ))}
        </section>
       }

    </>
  )
}
