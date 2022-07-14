import React, { Component } from 'react'
import { Header, Selection, Help, Footer, PlayerContainer } from './containers';
import { Navbar, Break } from './components';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPlayer: false,
      movieId: ''
    }
  }

  //bekommt von Selection einen Wert und löst den erten Render vom Player aus
  handleCallback = (num) => {
    this.setState({ movieId: num, renderPlayer: true }, () => {
      console.log('MovieID ' + this.state.movieId)
    })
  }

  render() {
    const { movieId } = this.state;
    return (
      <div className="App">
        {/* Navbar und Header sind in einem div, damit sie sich einen Hintergrund teilen */}
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Break />
        {/* renderPlayer wird erst auf true gesetzt, wenn User einen Film ausgewählt hat */}
        {this.state.renderPlayer
          ? <PlayerContainer movieId={movieId} />
          : null}
        <Selection handleClick={this.handleCallback} />
        <Help />
        <Footer />
      </div>
    )
  }
}