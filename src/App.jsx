import React from 'react'
import './App.css'
import Player from './components/player/Player'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
      <main>

        <div id='gameContainer' className='col-12 col-sm-10 col-md-8 col-xl-6'>

          <ol id='players' className='col-12'>
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>

        </div>
        
      </main>
    </>
    
  )
}

export default App
