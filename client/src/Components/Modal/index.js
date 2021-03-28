import Modal from 'react-modal'
const MyModal = ({ children, isOpen, closeModal }) => {
	Modal.setAppElement('#root')
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	}
	return (
		<Modal
			isOpen={isOpen}
			on
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Example Modal'>
			{children}
		</Modal>
	)
}

export default MyModal
