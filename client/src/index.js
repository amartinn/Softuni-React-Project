import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Loading from './components/Loading'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import configureStore from './stores'
import { Router } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import * as cookieHelper from './utilities/cookieHelper'
import { ToastContainer } from 'react-toastify'
const history = createBrowserHistory()

const middleware = routerMiddleware()

const isLoggedIn = cookieHelper.getCookie('auth') !== null
const browsed = localStorage.getItem('browsed')
const initialState = {
	loggedIn: isLoggedIn,
	movies: {
		browsed: browsed !== null ? JSON.parse(browsed) : [],
	},
}
const store = configureStore(initialState, [middleware])

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<ToastContainer
				position='bottom-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Loading />
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)
