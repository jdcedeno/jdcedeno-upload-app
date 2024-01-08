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
							placeholderText={"Select Import Name:"}
						/>
						<p>Select a manifest that you'd like to import</p>
						<button>Upload Manifest</button>
						<p>Elapse Data Checking:</p>
						<p>No Elapsed Dates!</p>
						<p>Tolerance Window:</p>
					</div>
					<div className="flex-item">
						<p>Split schedule using social distancing?</p>
						<p>Location Checking:</p>
						<p>All Available!</p>
						<p>Client:</p>
					</div>
				</div>
				<h3>
					Data in the import file is correct. Please press Continue to
					import.
				</h3>
				<button>Continue Import</button>
			</Modal>
		</>
	)
}

export default App
