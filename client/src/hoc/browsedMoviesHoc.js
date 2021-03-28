import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as MovieActions from '../actions/movie'
import { bindActionCreators } from 'redux'
import { useParams } from 'react-router-dom'
export default function browsedHoc(WrappedComponent) {
	const mapDispatchToProps = dispatch => {
		const actions = MovieActions
		const actionsMap = { actions: bindActionCreators(actions, dispatch) }
		return actionsMap
	}
	const BrowsedMovie = props => {
		const { id } = useParams()
		const { addToBrowsed } = props.actions
		useEffect(() => {
			addToBrowsed(id)
		}, [id, addToBrowsed])

		return <WrappedComponent />
	}

	return connect(null, mapDispatchToProps)(BrowsedMovie)
}
