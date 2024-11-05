import React, { useState } from 'react'
import './Player.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Player = ({name, symbol, isActive, onChangeName}) => {
  const [updatedName, setName] = useState(name)
  const [isEdit, setEdit] = useState(false)

  const handleEditFun = () => {
    setEdit((edit) => !edit)
    if(isEdit){
    onChangeName(symbol, updatedName)

    }
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  let playerName =  <span className='playerName'>{updatedName}</span>
  if(isEdit) {
    playerName = <input type="text" required value={updatedName} onChange={handleChange}/>
  }
  

  return (
    <>
      <div className={`playerInfo col-12 col-md-6 ${isActive ? 'active' : ''}`}>
        <span className='player'>
            {playerName}
            <span className='playerSymbol'> {symbol} </span>
        </span>
        <button className="btn btn-secondary" onClick={handleEditFun}>{isEdit ? 'Save' : 'Edit'}</button>
      </div>
    </>
  )
}

export default Player
