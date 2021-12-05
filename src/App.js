import React from 'react';
import './App.css';
import BeerList from './components/BeerList';
import {Route, Routes} from 'react'
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/beers/:beerId" element={<BeerList  /> } />
          <Route path="/new-beer" element={<NewBeer/> } />
          <Route path="/random-beer" element={<RandomBeer/>} />
          
      </Routes>
      
    </div>
  );
}

export default App;
