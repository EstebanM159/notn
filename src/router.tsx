import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './views/HomePage'
import MoviesPage from './views/MoviesPage'
import SeriesPage from './views/SeriesPage'
export default function AppRouter () {
  return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<HomePage/>} index />
                    <Route path='/movies' element={<MoviesPage/>} index />
                    <Route path='/series' element={<SeriesPage/>} index />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}
