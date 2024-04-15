import { useEffect, useState } from 'react'
// import { type Genre } from '../types'
import { useAppStore } from '../stores/useAppStore'
import Spinner from '../icons/Spinner'
import { useSetFilters } from '../hooks/useSetFilters'
import { useSearchByGenresEffect } from '../hooks/useSearchByGenresEffect'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
export default function SeriesPage () {
  const { fetchGenresSeries, genresSeries, series, searchSeriesByGenres } = useAppStore()
  const [loading, setLoading] = useState(false)
  const { handleClick, filters } = useSetFilters()
  useSearchByGenresEffect(filters, searchSeriesByGenres, setLoading)
  useEffect(() => {
    fetchGenresSeries('https://api.themoviedb.org/3/genre/tv/list?api_key=')
  }, [])
  const slideLeft = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const slider = event.currentTarget.nextElementSibling as HTMLDivElement
    if (slider) {
      slider.scrollLeft -= 300
    }
  }
  const slideRight = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const slider = event.currentTarget.previousElementSibling as HTMLDivElement
    if (slider) {
      slider.scrollLeft += 300
    }
  }
  return (
    <>
      <h2 className='text-xl mb-3 mx-8'>Generos</h2>
      <div className='mx-8 flex items-center relative'>
        <MdChevronLeft
              onClick={slideLeft}
              className='bg-zinc-800 text-white top-0 bottom-0 left-0 absolute opacity-50 md:hidden hover:opacity-40 cursor-pointer z-10 group-hover:block'
              size={30}
        />
        <ul className='flex gap-2 overflow-scroll scroll-smooth no-scrollbar relative'>
            {genresSeries.map(genre => (
              <li key={genre.id}
                  className={filters.includes(genre.id)
                    ? 'bg-white text-black h-fit py-1 px-2 rounded-lg font-normal text-sm cursor-pointer  text-center text-nowrap'
                    : 'bg-gray-950 h-fit py-1 px-2 rounded-lg font-extralight text-sm cursor-pointer text-center text-nowrap'}
                  onClick={() => { handleClick(genre.id) }}>
                  {genre.name}
              </li>
            ))}
        </ul>
        <MdChevronRight
              onClick={slideRight}
              className='bg-zinc-800 text-white top-0 bottom-0 right-0 absolute opacity-60 md:hidden hover:opacity-40 cursor-pointer z-10 group-hover:block'
              size={30}
              />
      </div>
    <h3 className='text-4xl text-center my-5'>Series</h3>
    {
        loading
          ? <Spinner/>
          : <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-8 gap-4'>
          {series.map(series => (
            <div className="flex flex-col gap-2" key={series.id}>
              <p className='text-center whitespace-nowrap overflow-hidden'>{series.name}</p>
              <img className='rounded-lg' src={`https://image.tmdb.org/t/p/w342/${series.poster_path}`} alt="" />
            </div>
          ))}
        </section>
       }
    </>
  )
}
