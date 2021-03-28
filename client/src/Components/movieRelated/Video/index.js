import YouTube from 'react-youtube'
import TrailerAPI from 'movie-trailer'
import { useState, useEffect } from 'react'
const options = {
	height: '100%',
	width: '100%',
	playerVars: {
		autoplay: 1,
	},
}

const Video = ({ searchTerm = '' }) => {
	const [url, setUrl] = useState('')
	const [notFound, setNotfound] = useState(false)
	useEffect(() => {
		TrailerAPI(searchTerm)
			.then(url => {
				const urlParams = new URLSearchParams(new URL(url).search)
				setUrl(urlParams.get('v'))
			})
			.catch(err => setNotfound(true))
	})

	return !notFound ? (
		url && <YouTube videoId={url} opt={options} />
	) : (
		<h1>Trailer is not available</h1>
	)
}

export default Video
