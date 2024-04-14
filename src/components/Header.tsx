import { NavLink } from 'react-router-dom'
import UserSVG from '../icons/User'
type NavLinkProps = {
  isActive: boolean
}
export default function Header () {
  const navLinkClasses = ({ isActive }: NavLinkProps) => (
    isActive
      ? 'text-cyan-300 uppercase font-bold bg-neutral-800 rounded-md px-3 py-2 text-sm font-medium'
      : 'text-white uppercase font-bold rounded-md px-3 py-2 text-sm font-medium'
  )
  return (
    <header>
        <div className="w-full px-20 py-8 bg-neutral-900">
            <div className="flex justify-between items-center">
                <div className='flex gap-14 items-center'>
                    <h1 className="text-3xl text-white"><span className='text-cyan-300'>Not</span>Netflix</h1>
                    <nav className="flex gap-5">
                        <NavLink to='/' className={navLinkClasses}>Inicio</NavLink>
                        <NavLink to='/movies' className={navLinkClasses}>Peliculas</NavLink>
                        <NavLink to='/series' className={navLinkClasses}>Series</NavLink>
                    </nav>
                </div>
                <div className="flex gap-2 items-center">
                    <p className='text-white text-lg'>elpichichi</p>
                    <UserSVG/>
                </div>
            </div>
        </div>
    </header>
  )
}
