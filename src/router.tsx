import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Spinner from './icons/Spinner'
const HomePage = lazy(async () => await import('./views/HomePage'))
const MoviesPage = lazy(async () => await import('./views/MoviesPage'))
const SeriesPage = lazy(async () => await import('./views/SeriesPage'))
export default function AppRouter () {
  return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={
                        <Suspense fallback={<Spinner/>}>
                            <HomePage/>
                        </Suspense>
                    } index
                    />
                    <Route path='/movies' element={
                        <Suspense fallback={<Spinner/>}>
                            <MoviesPage/>
                        </Suspense>
                    }>
                    </Route>
                    <Route path='/series' element={
                        <Suspense fallback={<Spinner/>}>
                            <SeriesPage/>
                        </Suspense>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
  )
}
