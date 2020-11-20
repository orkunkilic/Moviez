import React from 'react'

const AddMovie = () => {
    return (
        <div className="flex flex-col">
            <input type="text" placeholder="Movie Title" className="p-2 my-1 rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none" />
            <textarea className="p-2 my-1 rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none resize-none" placeholder="Your Review / Comment" name="content" id="content" cols="30" rows="5"></textarea>
            <select name="rating" id="rating" className="p-2 my-1 text-gray-500 focus:text-black active:text-black rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none">
                <option value="" disabled selected>Rating</option>

                <option value="5">5</option>
                <option value="5">4</option>
                <option value="5">3</option>
                <option value="5">2</option>
                <option value="5">1</option>
            </select>
        </div>
    )
}

export default AddMovie
