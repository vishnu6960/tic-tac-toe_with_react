import React, { useState } from 'react'
import './GameBoard.css'


const GameBoard = ({ onSelectBox, board }) => {

    
    return (
        <div className='container col-10 col-sm-9 col-md-7 col-lg-6' id='gameBoard'>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className='symbolRow'>
                    {row.map((playerSymbol, colIndex) => (
                        <div key={colIndex} type='button' className='symbolCol'>
                            <button onClick={() => onSelectBox(rowIndex, colIndex)} className='symbolButton' disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    )
}

export default GameBoard
