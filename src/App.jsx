import React, { act, useEffect, useState } from 'react'
import './App.css'
import Player from './components/player/Player'
import 'bootstrap/dist/css/bootstrap.min.css'
import GameBoard from './components/gameboard/GameBoard'
import Log from './components/log/Log'
import { winningCombinations } from './components/winningCombinatios'
import GameOver from './components/gameover/GameOver'

const boardArr = [[null, null, null], [null, null, null], [null, null, null]]

const App = () => {

  const [players, setPlayers] = useState({
    'X' : 'Player 1',
    'O' : 'Player 2'
  })
  const [gameTurns , setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  let gameBoard = [...boardArr.map(arr => [...arr])]
  for(const turn of gameTurns){
      const { square, player } = turn
      const { row, col } = square
      // console.log(player)
      gameBoard[row][col] = player
  }

  let winner
  for(const combination of winningCombinations){
    let firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
    let secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
    let thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]

    if( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol]
      break
    }
  }

  let isDraw = gameTurns.length == 9 && !winner

  const handleSelectBox = (rowIndex, colIndex) => {
    setActivePlayer((currPlayer) => currPlayer === 'X' ? 'O' : 'X')

    setGameTurns((prevTurns) => {

      let currentPlayer = 'X'

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
      }

      // console.log(currentPlayer)

      const updateTurns = [
        { square : { row : rowIndex, col : colIndex}, player: currentPlayer}, ...prevTurns
      ]
      return updateTurns
    })
  }

  const handleRematch = () => {
    setGameTurns([])
    setActivePlayer('X')
  }

  const handleChangeName = ( symbol, newName ) => {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer, 
        [symbol] : newName
      }
    })
  }
  return (
    <>
      <main>

        <div id='gameContainer' className='col-12 col-sm-10 col-md-9 col-lg-8 col-xl-6'>

          <div id='players' className='col-12 highlight-player'>
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handleChangeName} />
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handleChangeName} />
          </div>
          
          {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRematch} />}
          <GameBoard onSelectBox={handleSelectBox} board={gameBoard} />

        </div>

        <Log turns={gameTurns} />
        
      </main>
    </>
    
  )
}

export default App
