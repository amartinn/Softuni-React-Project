import { combineReducers } from 'redux'
import user from './user'
const reducers = { loggedIn: user }

const combined = combineReducers(reducers)
export default combined
