import React, { useEffect, useState } from 'react'
import { Movie } from '../../components'
import imgUrl from '../../assets/thumbnail.jpg'
import './selection.css'

const Selection = ({handleClick}) => {

  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch("https://gruppe9.toni-barth.com/movies/")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setMovies(data.movies)
    })
    }, []);

  return (
    <div className='wum__selection section__padding' id='movies'>
        <div className='wum__selection-heading'>
          <h1 className='gradient__text'>Our movie selection:</h1>
        </div>
        <div className='wum__selection-container'>
          {movies && movies.map((movie) => <Movie key={movie.id} imgUrl={imgUrl} title={movie.name} customClickEvent={() => handleClick(movie.id)}/>)} 
        </div>
      </div>
  )
}

export default Selection