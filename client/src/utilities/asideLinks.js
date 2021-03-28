const links = [
	{
		title: 'Menu',
		link: '/',
		links: [
			{
				to: '/topRated',
				text: 'Top Rated Movies',
			},
			{
				to: '/Popular',
				text: 'Popular Movies',
			},
			{
				to: '/Latest',
				text: 'Latest Movies',
			},
			{
				to: '/playing',
				text: 'Now Playing Movies',
			},
			{
				to: '/upcoming',
				text: 'Upcoming Movies',
			},
		],
	},
	{
		title: 'My Movies',
		auth: true,
		links: [
			{
				to: '/recent',
				text: 'Recently Browsed Movies',
			},
			{
				to: '/favorites',
				text: 'Favorite Movies',
			},
		],
	},
]

export default links
