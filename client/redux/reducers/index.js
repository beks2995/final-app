import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import gameReducer from './gameReducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    gameReducer
  })

export default createRootReducer
