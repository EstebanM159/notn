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
                lg:w-[280px] inline-block cursor-pointer relative mx-3'>
      {
        item.backdrop_path
          ? <img
              className='w-full h-auto block'
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            />
          : <div className='bg-notFound w-full h-36 bg-contain bg-no-repeat bg-center'></div>
      }
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {name}
        </p>

      </div>
    </div>
  )
}
