import React from 'react'
import './GameOver.css'

const GameOver = ({winner, onRestart}) => {
  return (
    <div id='game-over'>
      <h1>Game Over!!</h1>
      {winner && <h6>Winner : {winner}</h6>}
      {!winner && <h6>It's a Draw</h6>}
      <button onClick={onRestart}>Restart</button>
    </div>
  )
}

export default GameOver
