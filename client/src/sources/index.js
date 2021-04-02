import User from './controllers/user'
import Movie from './controllers/movie'
const APP = {
	user: new User(),
	movie: new Movie(),
}
window.__APP__ = APP
export default APP
