import React, { useState } from 'react'
import './GameBoard.css'

const boardArr = [[null, null, null], [null, null, null], [null, null, null]]

const GameBoard = ({ onSelectBox, turns }) => {

    let gameBoard = boardArr
    for(const turn of turns){
        const { square, player } = turn
        const { row, col } = square
        console.log(player)
        gameBoard[row][col] = player
    }
    return (
        <div className='container col-10 col-sm-9 col-md-7 col-lg-6' id='gameBoard'>
            {gameBoard.map((row, rowIndex) => (
                <div key={rowIndex} className='symbolRow'>
                    {row.map((playerSymbol, colIndex) => (
                        <div key={colIndex} type='button' className='symbolCol'>
                            <button onClick={() => onSelectBox(rowIndex, colIndex)} className='symbolButton'>{playerSymbol}</button>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    )
}

export default GameBoard
