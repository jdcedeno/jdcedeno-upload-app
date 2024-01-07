import "./App.css"
import React, { useState } from "react"
import Modal from "./components/Modal"

function App() {
	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	return (
		<>
			<button onClick={openModal}>upload document</button>

			<Modal show={isModalOpen} onClose={closeModal}>
				<p>this is the modal content</p>
			</Modal>
		</>
	)
}

export default App
