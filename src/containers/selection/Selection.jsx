import React from 'react'
import { Movie } from '../../components'
import './selection.css'
import imgUrl from '../../assets/thumbnail.jpg'

const Movies = () => {
  return (
    <div className='wum__selection section__padding' id='movies'>
      <div className='wum__selection-heading'>
        <h1 className='gradient__text'>Unsere Filmauswahl</h1>
      </div>
      <div className='wum__selection-container'>
      <Movie imgUrl={imgUrl} title='Ein toller Titel'/>
      <Movie imgUrl={imgUrl} title='Noch ein toller Titel'/>
      <Movie imgUrl={imgUrl} title='Wow was für ein Film'/>
      <Movie imgUrl={imgUrl} title='Hier könnte ihre Werbung stehen'/>
      </div>
    </div>
  )
}

export default Movies
