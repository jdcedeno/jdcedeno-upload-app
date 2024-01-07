import "./App.css"
import React, { useState } from "react"
import Modal from "./components/Modal"
import Dropdown from "./components/Dropdown"

function App() {
	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	const dropOptions1 = [
		{ label: "Option 1", value: "1" },
		{ label: "Option 2", value: "2" },
		{ label: "Option 3", value: "3" },
	]

	const handleSelect = (option) => {
		console.log("Selected: ", option)
	}

	return (
		<>
			<button onClick={openModal}>upload document</button>

			<Modal show={isModalOpen} onClose={closeModal}>
				<h1>Document Upload</h1>
				<div className="flex-container">
					<div className="flex-item">
						<Dropdown
							options={dropOptions1}
							onSelect={handleSelect}
						/>
					</div>
					<div className="flex-item">Column 2</div>
				</div>
			</Modal>
		</>
	)
}

export default App
