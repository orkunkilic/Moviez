import React, { useEffect, useState } from 'react';
import axios from 'axios'
//const { ipcRender } = window.require('electron');

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios('http://localhost:5000/', {
      method: 'GET',
    })
      .then(r => setData(r))
  }, []);

  const star = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
  return (
    <div>
      <div className="flex justify-center">
        <button className="bg-yellow-500 p-2 rounded shadow-inner shadow-xl my-5 w-32 h-16 text-white transform hover:-translate-y-1 hover:scale-105 transition duration-200 ease-in-out">+ Add Movie</button>
      </div>
      <div className="grid grid-cols-3 gap-y-2 gap-x-2 mx-5 py-5 border-t-2">
        {data && data.data.map(item => (
          <div className="col-span-1">
            <div className="border rounded-lg p-4 cursor-pointer">
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <div className="flex flex-row">
                <h3>Rating:</h3>
                {[...Array(item.rating)].map((x, i) =>
                  <div className="h-4 w-4 my-auto ml-1 text-yellow-500">{star}</div>
                )}
              </div>
              <p>Date watched: .....</p>

            </div>
          </div>
        ))}
        {!data && (
          <h1>Veri bulunamadı!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
