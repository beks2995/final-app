import React from 'react'
import { useSelector } from 'react-redux'
import './buyGame.scss'
import loader from './loader.gif'


const BuyGame = () => {
  const games = useSelector(s => s.gameReducer.gameData)
  return (
    <div>
      <div className="container">
        <div className="row">
          {games.length === 0 ? <img src={loader} alt=""/> : games.map((el, idx) => (
            <div className="col" key={ idx }>
              <div className="game-card">
                <img src={el.thumbnail} alt="" className="game-card__img"/>
                <h2 className="game-card__title">{el.game_title}</h2>
                <p className="game-card__genre">Genre: {el.game_genre}</p>
                <p className="game-card__company">Developer: {el.game_company}</p>
                <p className="game-card__date">Release date: {el.game_date}</p>
                <p className="game-card__platform">Platforms: {el.platform}</p>
                <p className="game-card__descr">{el.game_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BuyGame