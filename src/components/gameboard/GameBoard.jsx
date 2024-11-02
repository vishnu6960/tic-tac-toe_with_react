import React from 'react'
import './GameBoard.css'

const arr = [[null, null, null], [null, null, null], [null, null, null]]

const GameBoard = () => {
  return (
    <div className='container col-10 col-sm-9 col-md-7 col-lg-6 col-xl-6' id='gameBoard'>
        {arr.map((row, rowIndex) => (
            <div key={rowIndex} className='symbolRow'>
                {row.map((playerSymbol, colIndex) => (
                    <div key={colIndex} type='button' className='symbolCol'>
                        {playerSymbol}
                    </div>
                ))}

            </div>
        ))} 
    </div>
  )
}

export default GameBoard
