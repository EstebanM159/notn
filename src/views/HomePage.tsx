import { useEffect } from 'react'
import { useAppStore } from '../stores/useAppStore'
import Row from '../components/Row'
export default function HomePage () {
  const {
    fetchMovies,
    fetchPopularSeries,
    fetchLatestSeries,
    fetchLatestMovies,
    popularSeries,
    popularMovies,
    latestSeries,
    latestMovies
  } = useAppStore()
  useEffect(() => {
    fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=')
    fetchPopularSeries('https://api.themoviedb.org/3/tv/popular?api_key=')
    fetchLatestSeries('https://api.themoviedb.org/3/discover/tv?sort_by=first_air_date.desc&api_key=')
    fetchLatestMovies('https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc&api_key=')
  }, [])
  return (
    <div className='sm:mx-1 md:mx-5'>
        <Row title='Peliculas Populares' items={popularMovies}/>
        <Row title='Series populares' items={popularSeries}/>
        <Row title='Últimas Peliculas' items={latestSeries}/>
        <Row title='Últimas series' items={latestMovies}/>
    </div>
  )
}
