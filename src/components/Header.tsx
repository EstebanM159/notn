import { NavLink } from 'react-router-dom'
import UserSVG from '../icons/User'
type NavLinkProps = {
  isActive: boolean
}
export default function Header () {
  const navLinkClasses = ({ isActive }: NavLinkProps) => (
    isActive
      ? 'text-cyan-300 uppercase bg-neutral-800 rounded-md px-3 py-2 text-xs sm:text-sm font-medium'
      : 'text-white uppercase rounded-md px-3 py-2 text-xs sm:text-sm font-medium'
  )
  return (
    <header className='flex justify-between items-center sm:px-20 sm:py-8 px-4 py-2 bg-neutral-900 '>
      <div className='flex sm:gap-14 gap-3 items-center'>
        <h1 className="sm:text-3xl text-xl text-white"><span className='text-cyan-300'>Not</span>Netflix</h1>
        <nav className="flex sm:gap-5 gap-0">
            <NavLink to='/' className={navLinkClasses}>Inicio</NavLink>
            <NavLink to='/movies' className={navLinkClasses}>Peliculas</NavLink>
            <NavLink to='/series' className={navLinkClasses}>Series</NavLink>
        </nav>
      </div>
      <div className="flex gap-2 items-center">
        <p className='text-white text-xs sm:text-lg'>elpichichi</p>
        <UserSVG/>
      </div>
    </header>
  )
}
