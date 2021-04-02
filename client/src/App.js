import { Component } from 'react'
import { Layout } from './components/nav'
import RouteList from './routes/routeList'
import { connect } from 'react-redux'
import * as MovieActions from './actions/movie'
import { bindActionCreators } from 'redux'
import { ToastContainer } from 'react-toastify'
import Loading from './components/Loading'
const mapDispatchToProps = dispatch => {
	const actions = MovieActions
	const actionsMap = { actions: bindActionCreators(actions, dispatch) }
	return actionsMap
}
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
		}
	}
	componentDidMount() {
		this.props.actions.getMovies().then(_ => this.setState({ show: true }))
	}
	render() {
		return (
			this.state.show && (
				<>
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
					<Layout>
						<RouteList />
					</Layout>
				</>
			)
		)
	}
}

export default connect(null, mapDispatchToProps)(App)
