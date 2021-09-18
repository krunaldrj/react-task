import React from 'react'

import './App.css';
import ALBUMS from './components/albums'
import PHOTOS from './components/photos'
import HOME from './components/home'

function App() {
  return (
    <div className="App">
     <div>
       <HOME/>
       </div>
      <div>
      <ALBUMS />
      </div>
      <div>
      <PHOTOS />
        </div>
      </div>
  );
}

export default App;
