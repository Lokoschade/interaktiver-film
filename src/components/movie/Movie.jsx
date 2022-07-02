import React from 'react'
import './movie.css'

const Movie = ({imgUrl, title}) => {
  return (
    <div>
      <div className='wum__selection-container_movie'>
        <div className='wum__selection-container_movie-image'>
            <img src={imgUrl} alt="thumbnail"/>
        </div>
        <div className='wum__selection-container_movie-title'>
            <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Movie
