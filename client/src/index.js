import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'

import configureStore from './stores'
import { Router } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const middleware = routerMiddleware()

const loggedIn = localStorage.getItem('_authToken') !== null
const initialState = {
	loading: false,
	loggedIn: loggedIn,
}
const store = configureStore(initialState, [middleware])

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)
