import React from 'react'

import { Header, Selection, Help, Footer, PlayerContainer } from './containers';
import { Navbar, Break } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Break/>
      <PlayerContainer movieId='1' clipId='1'/>
      <Selection />
      <Help />
      <Footer />
    </div>
  )
}

export default App