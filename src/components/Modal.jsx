import React from "react"

const Modal = ({ show, onClose, children }) => {
	if (!show) {
		return null
	}

	return (
		<div className="modal-backdrop">
			<div className="modal">
				{children}
				<button className="modal-cancel-btn" onClick={onClose}>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default Modal
