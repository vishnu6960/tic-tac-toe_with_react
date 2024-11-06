import React from 'react'
import './GameOver.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const GameOver = ({winner, onRestart}) => {
  return (
    <div id='game-over'>
      <h1>Game Over!!</h1>
      {winner && <h6>Winner : {winner}</h6>}
      {!winner && <h6>It's a Draw</h6>}
      <button className='btn btn-primary' onClick={onRestart}>Restart</button>
    </div>
  )
}

export default GameOver
