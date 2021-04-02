import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reduxStore = (initialState = {}, middlewares = []) => {
	const store = createStore(
		reducers,
		initialState,
		composeWithDevTools(applyMiddleware(thunk, ...middlewares))
	)

	return store
}
export default reduxStore
