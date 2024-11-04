import React from 'react'

const GameOver = ({winner, onRestart}) => {
  return (
    <div>
      <h1>Game Over!!</h1>
      {winner && <p>Winner : {winner}</p>}
      {!winner && <p>It's a Draw</p>}
      <button onClick={onRestart}>Restart</button>
    </div>
  )
}

export default GameOver
