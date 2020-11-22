import React from 'react'
import moment from 'moment'
import axios from 'axios'

const MovieDetails = ({ item, cb }) => {

    const deleteMovie = () => {
        axios.delete('http://localhost:5000', {
            params: { id: item.id }
        })
            .then(r => cb())
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-xl col-span-5 border-b-2 py-1 break-words font-bold">{item.title}</h1>
            <p className="text-lg break-words py-2">{item.content}</p>
            <div className="flex flex-row">
                <h3 className="text">Rating:</h3>
                <div className=" ml-1">
                    {[...Array(parseInt(item.rating))].map((x, i) =>
                        <div key={i} className="text-lg my-auto text-yellow-500 inline-block align-top">&#x2605;</div>
                    )}
                </div>
            </div>
            <h3 className="text">Date watched: {moment(item.date).format('MM/DD/YYYY')}</h3>
            <h3 className="text">Date added: {moment(Date(item.id)).format('MM/DD/YYYY')}</h3>
            <div onClick={deleteMovie} className="ml-auto pr-4 pt-4 h-10 w-10 text-red-700 cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition duration-200 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default MovieDetails
