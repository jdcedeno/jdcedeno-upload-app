import "./App.css"
import React, { useState } from "react"
import Modal from "./components/Modal"
import Dropdown from "./components/Dropdown"
import FileDrop from "./components/FileDrop"

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

	const handleFileSelect = (files) => {
		console.log(files)
	}

	return (
		<>
			<button onClick={openModal}>upload document</button>

			<Modal show={isModalOpen} onClose={closeModal}>
				<div className="modal-close-btn">
					<a className="x"></a>
				</div>

				<h2 className="document-upload-title">Document Upload</h2>
				<hr className="division-line" />

				<div className="flex-container">
					<div className="flex-item-left">
						<Dropdown
							options={dropOptions1}
							onSelect={handleSelect}
							placeholderText={"Select Import Name:"}
						/>
						<hr className="division-line" />
						<p>
							<strong>
								Select a manifest that you'd like to import
							</strong>
						</p>
						<div className="upload-border">
							<FileDrop onFileSelect={handleFileSelect} />
							<button>Upload Manifest</button>
						</div>
						<hr className="division-line" />
						<p>Elapse Data Checking:</p>
						<p>No Elapsed Dates!</p>
						<hr className="division-line" />
						<p>Tolerance Window:</p>
					</div>

					<div className="flex-item-right">
						<p>Split schedule using social distancing?</p>
						<hr className="division-line" />
						<p>Location Checking:</p>
						<p>All Available!</p>
						<hr className="division-line" />
						<p>Client:</p>
					</div>
				</div>
				<h4>
					Data in the import file is correct. Please press Continue to
					import.
				</h4>
				<button>Continue Import</button>
			</Modal>
		</>
	)
}

export default App
