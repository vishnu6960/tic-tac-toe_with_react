import React from 'react'
import './App.css'
import Player from './components/player/Player'
import 'bootstrap/dist/css/bootstrap.min.css'
import GameBoard from './components/gameboard/GameBoard'


const App = () => {
  return (
    <>
      <main>

        <div id='gameContainer' className='col-12 col-sm-10 col-md-9 col-lg-8 col-xl-6'>

          <div id='players' className='col-12'>
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </div>
          
          <GameBoard />

        </div>
        
      </main>
    </>
    
  )
}

export default App
