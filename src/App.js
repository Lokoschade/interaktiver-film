import React from 'react'

import { Header, Movies, Help, Footer } from './containers';
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
      <Movies />
      <Help />
      <Footer />
    </div>
  )
}

export default App