import React from 'react';
import './App.css';
import Video from './Video';
function App() {
  return (
    //Bem convention.
    <div className="app">
     <div className="app__videos">
       <Video />
       <Video />
       <Video />
       <Video />
     </div>
    </div>
  );
}

export default App;
