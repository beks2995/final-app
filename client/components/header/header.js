import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './header.scss'
import {getGames} from '../../redux/reducers/gameReducer'

const Header = () => {
  const dispatch = useDispatch()
  const buyHandler = () => {
    dispatch(getGames())
  }
  return (
    <div className='header'>
      <div className="container">
        <nav className='header__nav'>
          <Link to='/' className="logo">Logo</Link>
          <div className='header__menu'>
            <Link to='/' className='header__link'>Home</Link>
            <Link to='/buy' className='header__link' onClick={buyHandler}>Buy game</Link>
            <Link to='/add' className='header__link'>Add game</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header