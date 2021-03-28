import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Loading from './components/Loading'
import './index.css'

import configureStore from './stores'
import { Router } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import * as cookieHelper from './utilities/cookieHelper'
const history = createBrowserHistory()

const middleware = routerMiddleware()

const isLoggedIn = cookieHelper.getCookie('auth') !== null
const initialState = {
	loggedIn: isLoggedIn,
}
const store = configureStore(initialState, [middleware])

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Loading />
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)
