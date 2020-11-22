import axios from 'axios'
import React, { useRef } from 'react'

const AddMovie = ({ cb }) => {
    const ref = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: e.target.elements.title.value,
            content: e.target.elements.content.value,
            rating: e.target.elements.rating.value,
            date: e.target.elements.date.value
        }
        axios.post('http://localhost:5000', data)
            .then(r => cb())
    }
    return (
        <div>
            <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
                <input required type="text" name="title" placeholder="Movie Title" className="p-2 my-1 rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none" />
                <textarea required className="p-2 my-1 rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none resize-none" placeholder="Your Review / Comment" name="content" id="content" cols="30" rows="5"></textarea>
                <select required name="rating" id="rating" className="p-2 my-1 text-yellow-500 rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none">
                    <option value="5" className="text-yellow-500">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</option>
                    <option value="4" className="text-yellow-500">&#x2605;&#x2605;&#x2605;&#x2605;</option>
                    <option value="3" className="text-yellow-500">&#x2605;&#x2605;&#x2605;</option>
                    <option value="2" className="text-yellow-500">&#x2605;&#x2605;</option>
                    <option value="1" className="text-yellow-500">&#x2605;</option>
                </select>
                <input required ref={ref} className="p-2 my-1 rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none" placeholder="Date Watched" name="date" id="date" type="text" onFocus={() => { ref.current.type = 'date' }} />
                <button className="flex self-center justify-center items-center bg-yellow-500 p-2 rounded shadow-inner shadow-xl my-5 w-32 h-12 text-white transform hover:-translate-y-1 hover:scale-105 transition duration-200 ease-in-out  flex flex-row" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddMovie
