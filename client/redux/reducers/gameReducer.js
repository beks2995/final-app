import axios from 'axios'

import actions from './actions'

const initialState = {
  gameData: [],
  postedGame: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_GAME_DATA: {
      return {
        ...state, gameData: action.gameData
      }
    }
    case actions.POSTED_GAME: {
      return {
        ...state, postedGame: action.postedGame
      }
    }
    default:
      return state
  }
}

export const getGames = () => {
  return (dispatch) => {
    axios('http://localhost:8090/api/v1/games')
      .then(({ data }) => dispatch({ type: actions.UPDATE_GAME_DATA, gameData: data }))
  }
}

export const postGame = (title, descr, genre, date) => {
  const data = JSON.stringify({
    game_title: title,
    game_genre: genre,
    game_description: descr,
    game_date: date
  })
  console.log(data)
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8090/api/v1/games',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }).then(() => dispatch({ type: actions.POSTED_GAME, postedGame: data }))
  }
}