import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Modal from './Modal';
import moment from 'moment'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState();
  const [children, setChildren] = useState();

  const modalCallback = () => {
    setIsModalOpen(!isModalOpen)
    fetchData()
  }
  const openModal = (children) => {
    setChildren(children)
    setIsModalOpen(true)
  }
  const fetchData = () => {
    axios('http://localhost:5000/', {
      method: 'GET',
    })
      .then(r => setData(r))
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <button onClick={() => openModal('AddMovie')} className="flex items-center justify-center bg-yellow-500 p-2 rounded shadow-inner shadow-xl my-5 w-48 h-16 text-white transform hover:-translate-y-1 hover:scale-105 transition duration-200 ease-in-out  flex flex-row">
          <div className="w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div> <p className="text-xl">Add Movie</p> </button>
        {isModalOpen ? <Modal children={children} cb={modalCallback} /> : <></>}
      </div>
      <div className="grid auto-rows-fr grid-cols-3 gap-y-2 gap-x-2 mx-5 py-5 border-t-2">
        {data && data.data.map(item => (
          <div key={item.id} className="col-span-1 border rounded-lg p-4 cursor-pointer" onClick={() => openModal(item)}>
            <h1 className="text-lg font-semibold truncate">{item.title}</h1>
            <div className="flex flex-row">
              <h3>Rating:</h3>
              <div className=" ml-1">
                {[...Array(parseInt(item.rating))].map((x, i) =>
                  <div key={i} className="text-lg my-auto text-yellow-500 inline-block align-top">&#x2605;</div>
                )}
              </div>

            </div>
            <p>Date watched: {moment(item.date).format('MM/DD/YYYY')}</p>
          </div>
        ))}
      </div>
      {!data && (
        <h1 className="text-xl font-bold flex self-center justify-self-center">Loading...</h1>
      )}
      {data?.data.length <= 0 && (
        <h1 className="text-xl font-bold flex self-center justify-self-center">No Data!</h1>

      )}
    </div>
  );
}

export default App;
