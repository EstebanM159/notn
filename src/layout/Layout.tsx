import { Outlet } from 'react-router-dom'
import Modal from '../components/Modal'
import Header from '../components/Header'
export default function Layout () {
  return (
     <>
        <Header/>
        <main className='container mx-0 md:mx-auto py-6'>
          <Outlet/>
        </main>
        <Modal></Modal>
    </>
  )
}
