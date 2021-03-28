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

	useEffect(() => {
		TrailerAPI(searchTerm)
			.then(url => {
				const urlParams = new URLSearchParams(new URL(url).search)
				setUrl(urlParams.get('v'))
			})
			.catch(err => console.log('Trailer is not available'))
	})

	return url && <YouTube videoId={url} opt={options} />
}

export default Video
