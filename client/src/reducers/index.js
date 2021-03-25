import { combineReducers } from 'redux'
import loading from './loading'
import user from './user'
const reducers = { loading, loggedIn: user }

const combined = combineReducers(reducers)
export default combined
