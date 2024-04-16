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
    fetchMovies('https://api.themoviedb.org/3/movie/popular?language=es&api_key=')
    fetchPopularSeries('https://api.themoviedb.org/3/tv/popular?language=es&api_key=')
    fetchLatestSeries('https://api.themoviedb.org/3/discover/tv?language=es&sort_by=first_air_date.desc&api_key=')
    fetchLatestMovies('https://api.themoviedb.org/3/discover/movie?language=es&sort_by=release_date.desc&api_key=')
  }, [])
  return (
    <div className='mx-2 sm:mx-1 md:mx-5'>
        <Row title='Peliculas Populares' items={popularMovies}/>
        <Row title='Series populares' items={popularSeries}/>
        <Row title='Últimas Peliculas' items={latestMovies}/>
        <Row title='Últimas series' items={latestSeries}/>
    </div>
  )
}
