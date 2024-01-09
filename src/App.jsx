import "./App.css"
import React, { useState } from "react"
import Modal from "./components/Modal"
import Dropdown from "./components/Dropdown"
import FileDrop from "./components/FileDrop"
import RadioGroup from "./components/RadioGroup"

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

	const scheduleOptions = [
		{ label: "Yes", value: "Yes" },
		{ label: "No", value: "No" },
	]

	const clientOptions = [
		{ label: "Single", value: "Single" },
		{ label: "Multiple", value: "Multiple" },
	]

	const handleRadioChange = (value) => {
		console.log("Selected Value: ", value)
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
						<hr className="division-line align-left" />
						<p className="small-title">
							<strong>
								Select a manifest that you'd like to import
							</strong>
						</p>
						<div className="upload-border">
							<FileDrop onFileSelect={handleFileSelect} />
							<button>Upload Manifest</button>
						</div>
						<hr className="division-line align-left" />
						<p className="small-title">
							<strong>Elapse Data Checking:</strong>
						</p>
						<p className="small-text-green">No Elapsed Dates!</p>
						<hr className="division-line align-left" />
						<p className="small-title">
							<strong>Tolerance Window:</strong>
						</p>
					</div>

					<div className="flex-item-right">
						<p className="small-title">
							<strong>
								Split schedule using social distancing?
							</strong>
						</p>
						<RadioGroup
							name="split-schedule"
							options={scheduleOptions}
							onChange={handleRadioChange}
						/>
						<hr className="division-line align-left" />
						<p className="small-title">
							<strong>Location Checking:</strong>
						</p>
						<p className="small-text-green">All Available!</p>
						<hr className="division-line align-left" />
						<p className="small-title">
							<strong>Client:</strong>
						</p>
						<RadioGroup
							name="client-radio"
							options={clientOptions}
							onChange={handleRadioChange}
						/>
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
