import React, { act, useState } from 'react'
import './App.css'
import Player from './components/player/Player'
import 'bootstrap/dist/css/bootstrap.min.css'
import GameBoard from './components/gameboard/GameBoard'
import Log from './components/log/Log'


const App = () => {

  const [gameTurns , setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  const handleSelectBox = (rowIndex, colIndex) => {
    setActivePlayer((currPlayer) => currPlayer === 'X' ? 'O' : 'X')

    setGameTurns((prevTurns) => {

      let currentPlayer = 'X'

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
      }

      // console.log(currentPlayer)

      const updateTurns = [
        { square : { row : rowIndex, col : colIndex}, player: currentPlayer, ...prevTurns}
      ]
      return updateTurns
    })
  }
  return (
    <>
      <main>

        <div id='gameContainer' className='col-12 col-sm-10 col-md-9 col-lg-8 col-xl-6'>

          <div id='players' className='col-12 highlight-player'>
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
          </div>
          
          <GameBoard onSelectBox={handleSelectBox} turns={gameTurns} />

        </div>

        <Log turns={gameTurns} />
        
      </main>
    </>
    
  )
}

export default App
