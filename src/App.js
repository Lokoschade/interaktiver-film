import React from 'react'

import { Header, Movies, Help, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Movies />
      <Help />
      <Footer />
    </div>
  )
}

export default App