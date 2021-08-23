import React from 'react'
import { useDispatch } from 'react-redux'
import { postGame } from '../../redux/reducers/gameReducer'

const AddGame = () => {
  const dispatch = useDispatch()
  const formHandler = (e) => {
    e.preventDefault()
    dispatch(postGame(e.target.children[0].value, e.target.children[1].value, e.target.children[2].value, e.target.children[3].value))
  }
  return (
    <div>
      <form action="" onSubmit={formHandler}>
        <input type="text" placeholder='title'/>
        <input type="text" placeholder='description'/>
        <input type="text" placeholder='genre'/>
        <input type="text" placeholder='date'/>
        <button type="submit">Add game</button>
      </form>
    </div>
  )
}

export default AddGame