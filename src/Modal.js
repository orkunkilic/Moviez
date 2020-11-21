import React from 'react'
import AddMovie from './AddMovie'
import MovieDetails from './MovieDetails'

const Modal = ({ cb, children }) => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 absolute block">
            <div className="bg-white w-1/2">
                <div onClick={cb} className="ml-auto pr-4 pt-4 h-12 w-12 text-red-700 cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition duration-200 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="px-16 pb-12 pt-4">

                    {children === 'AddMovie' ? <AddMovie cb={cb} /> : <MovieDetails item={children} />}

                </div>
            </div>
        </div>

    )
}

export default Modal
