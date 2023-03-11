import React from 'react';
import TypeClothes from './components/TypeClothes';
import TypeTelevision from './components/TypeTelevision';
import TypeSpeaker from './components/TypeSpeaker';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <div className="App">
      <TypeClothes name="Clothing & Apparel" category="Accessories" receptacle="Bags" fashion="Kid's Fashion" sex="Men" img="1"/>
      <TypeTelevision nameshop="YoungShop" nametelevision="Samsung UHD TV 24inch" price={599} img="2" icon={<AiFillStar/>} icon2={<AiOutlineStar/>} numstar="02"/>
      <TypeSpeaker name="Harman Kadon Onyx Studio Mini, Reviews & Experiences" date="Feb 21, 2021" madeby="drfurion" img="3"/>
    </div>
  );
}

export default App;
