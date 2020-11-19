import React, { useEffect } from 'react';
import axios from 'axios'
import './tailwind.output.css';
//const { ipcRender } = window.require('electron');

function App() {
  useEffect(() => {
    axios('http://localhost:5000/', {
      method: 'GET',
    })
      .then(r => console.log(r))
  }, []);
  return (
    <div className='App'>
      <h1>Welcome!</h1>
    </div>
  );
}

export default App;
