import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'

import * as cookieHelper from './utilities/cookieHelper'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import configureStore from './stores'

const history = createBrowserHistory()

const middleware = routerMiddleware()

const isLoggedIn = cookieHelper.getCookie('auth') !== null
const browsed = localStorage.getItem('browsed')

const initialState = {
	loggedIn: isLoggedIn,
	movies: {
		browsed: browsed !== null ? JSON.parse(browsed) : [],
		favorites: [],
	},
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
