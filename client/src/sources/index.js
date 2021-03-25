import User from './controllers/user'
const APP = {
	user: new User(),
}
window.__APP__ = APP
export default APP
