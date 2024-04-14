import { useEffect, useState } from 'react'
import { useAppStore } from '../stores/useAppStore'
import { type Genre } from '../types'
export default function MoviesPage () {
  const { fetchMovies, fetchGenresMovies, genres, popularMovies, searchByGenres } = useAppStore()
  const [filters, setFilters] = useState<Array<Genre['id']>>([])
  useEffect(() => {
    fetchGenresMovies('https://api.themoviedb.org/3/genre/movie/list?api_key=')
    fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=')
  }, [])
  const handleClick = (genre: Genre['id']) => {
    setFilters([...filters, genre])
  }
  const isFilter = (id: Genre['id']) => {
    const isExists = filters.findIndex(fil => fil === id)
    return isExists
  }
  useEffect(() => {
    searchByGenres(filters)
  }, [filters])
  return (
    <>
    <h2 className='text-xl mb-3 mx-8'>Generos</h2>
    <div className='mx-8 grid grid-cols-[auto,auto,1fr] gap-4 items-center'>
      <ul className='flex gap-4 flex-wrap'>
        {genres.map(genre => (
          <li key={genre.id}
              className='bg-gray-950 h-fit py-1 px-2 rounded-lg font-extralight text-xs cursor-pointer'
              onClick={() => { handleClick(genre.id) }}>
              {genre.name}-{genre.id}
              {isFilter(genre.id) >= 0 && <button className='pl-3'>x</button>}
          </li>
        ))}
      </ul>

      <input type="text" className='bg-transparent border border-slate-500 rounded-md h-10 px-2' />
    </div>
    <h3 className='text-4xl text-center my-5'>Peliculas</h3>
       <section className='grid grid-cols-4 mx-8 gap-4'>
          {popularMovies.map(movie => (
            <div className="flex flex-col gap-2" key={movie.id}>
              <p className='text-center whitespace-nowrap'>{movie.title}</p>
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="" />
            </div>
          ))}
        </section>

    </>
  )
}
