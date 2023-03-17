import React from 'react';
import './App.css';
import ButtonLike from './components/ButtonLike';
import Star from './components/ButtonRate';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="App">
      <h1>Hello ReactJS</h1>
      <ButtonLike/>
      <Star/>
      <Gallery/>
    </div>
  );
}

export default App;
