import Layout from './Components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()
function App() {
	return (
		<Router history={history}>
			<Layout></Layout>
		</Router>
	)
}

export default App
