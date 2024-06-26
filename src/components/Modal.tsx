import Atropos from 'atropos/react'
import 'atropos/css'
import { useAppStore } from '../stores/useAppStore'
import Spinner from '../icons/Spinner'
const Modal = () => {
  const { modal, closeModal, contentModal, loading } = useAppStore()
  const name = contentModal.name ? contentModal.name : contentModal.title
  return (
    <>
      {modal
        ? (
        <>
          <div onClick={closeModal} className="flex justify-center items-center bg-black/80 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <Atropos rotateXMax={5} rotateYMax={5} shadow={false}>
                  {loading
                    ? (<Spinner></Spinner>)
                    : (<div className='flex flex-col-reverse md:flex-row-reverse mx-3 bg-neutral-900 justify-between rounded-md'>
                    <div className='flex flex-col items-center md:w-full px-5'>
                        <h3 className="text-white w-full pt-4 text-lg md:text-4xl font-bold my-3 text-start">
                            {name}
                        </h3>
                            <span className=' w-full md:w-3/4 h-px bg-white'></span>

                          <div className='flex gap-3 items-start w-full  h-auto flex-wrap py-4'>
                            {contentModal.genres.slice(0, 4).map(genre => (
                              <p key={genre.id} className='text-cyan-300 text-xs md:text-lg bg-neutral-800 py-1 px-2 rounded-md'>{genre.name}</p>
                            ))}
                          </div>

                        <p className='pb-5'>
                            {contentModal.overview}
                        </p>

                      </div>

                      <img className='w-full  md:hidden' src={`https://image.tmdb.org/t/p/w500/${contentModal.poster_path}`} alt={`Poster de ${contentModal.name}`} />
                      <img className='w-60 hidden md:block md:w-full' src={`https://image.tmdb.org/t/p/w342/${contentModal.poster_path}`} alt={`Poster de ${contentModal.name}`} />
                    </div>

                      )
                  }
                  </Atropos>
                  <button
                        className="bg-transparent border-0 text-white text-center w-full p-0 mt-3 mr-3 float-right"
                        onClick={ closeModal }
                    >x</button>
            </div>
          </div>
        </>
          )
        : null}
    </>
  )
}

export default Modal
