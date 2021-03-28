import { combineReducers } from 'redux'
import user from './user'
import movie from './movie'
const reducers = { loggedIn: user, movies: movie }

const combined = combineReducers(reducers)
export default combined
