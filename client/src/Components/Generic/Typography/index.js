const defaultVariants = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
}
const Typography = ({ variant, children, ...other }) => {
	const Component = defaultVariants[variant] ?? 'p'

	return <Component {...other}>{children}</Component>
}

export default Typography
