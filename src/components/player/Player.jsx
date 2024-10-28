import React from 'react'
import './Player.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Player = ({name, symbol}) => {
  return (
    <>
      <li className='col-12 col-md-6'>
        <span className='player'>
            <span className='playerName'>{name}</span>
            <span className='playerSymbol'> {symbol}</span>
        </span>
        <button>Edit</button>
      </li>
    </>
  )
}

export default Player
