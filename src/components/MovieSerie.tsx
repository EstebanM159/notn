import { type MovieSerieType } from '../types'
type MovieSerieProps = {
  item: MovieSerieType
}
export default function MovieSerie ({ item }: MovieSerieProps) {
  const name = item.name ? item.name : item.title
  const handleClick = (id: number) => {
    console.log(id)
  }
  return (
    <div onClick={() => handleClick(item.id)}
      className='w-[160px] sm:w-[200px] md:w-[240px]
                lg:w-[280px] inline-block cursor-pointer relative mr-2 md:mx-3'>
      {
        item.backdrop_path
          ? <img
              className='w-full h-auto block'
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            />
          : <div className='bg-notFound w-full h-20 md:h-36 bg-contain bg-no-repeat bg-center'></div>
      }
      <div className='md:absolute top-0 left-0 w-full h-full text-zinc-100 md:hover:bg-black/70 md:opacity-0 md:hover:opacity-100 md:text-white'>
        <p className='white-space-normal text-wrap text-xs md:text-sm md:font-bold flex justify-center items-center h-full text-center'>
          {name}
        </p>

      </div>
    </div>
  )
}
