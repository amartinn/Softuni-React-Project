import Aside from '../Aside'
import Footer from '../Footer'
import Header from '../Header'
import styles from './layout.module.css'
import { connect } from 'react-redux'
import * as LoadingActions from '../../actions/loading'
import { bindActionCreators } from 'redux'
import Loading from '../Loading'

const mapStateToProps = state => {
	return {
		loading: state.loading,
	}
}
const mapDispatchToProps = dispatch => {
	const actions = LoadingActions
	const actionsMap = { actions: bindActionCreators(actions, dispatch) }
	return actionsMap
}

const Layout = props => {
	const { loading } = props
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className={styles.wrapper}>
					<Aside />
					<div className={styles['inner-wrapper']}>
						<Header />
						{props.children}
						<Footer />
					</div>
				</div>
			)}
		</>
	)
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
