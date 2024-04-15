import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { type MovieSerieType } from '../types'
import MovieSerie from './MovieSerie'
import Spinner from '../icons/Spinner'
type RowProps = {
  items: MovieSerieType[]
  title: string
}
export default function Row ({ items, title }: RowProps) {
  const slideLeft = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const slider = event.currentTarget.nextElementSibling as HTMLDivElement
    if (slider) {
      slider.scrollLeft -= 500
    }
  }
  const slideRight = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const slider = event.currentTarget.previousElementSibling as HTMLDivElement
    if (slider) {
      slider.scrollLeft += 500
    }
  }
  const isEmpty = items.length === 0
  return (
    <>
      {/* <section className='flex flex-col mx-2 items-start'> */}
      <h1 className='text-lg md:text-3xl md:mx-3 my-4'>{title}</h1>
      {isEmpty
        ? <Spinner/>
        : <div className='relative flex items-center group'>
            <MdChevronLeft
              onClick={slideLeft}
              className='bg-zinc-800 text-white top-0 bottom-0 left-0 h-full absolute opacity-50 hover:opacity-40 cursor-pointer z-10 hidden group-hover:block'
              size={40}
            />
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative no-scrollbar'>
              {items.map((item) => (
                <MovieSerie key={item.id} item={item} />
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              className='bg-zinc-800 text-white top-0 bottom-0 right-0 h-full absolute opacity-50 hover:opacity-40 cursor-pointer z-10 hidden group-hover:block'
              size={40}
            />
        </div>
      }
      {/* </section> */}
    </>
  )
}
