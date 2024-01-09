import React, { useState } from "react"

const FileDrop = ({ onFileSelect }) => {
	const [dragActive, setDragActive] = useState(false)

	const handleDrag = (e) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true)
		} else if (e.type === "dragleave") {
			setDragActive(false)
		}
	}

	const handleDrop = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setDragActive(false)
		const files = e.dataTransfer.files
		if (files && files.length) {
			onFileSelect(files)
		}
	}

	const handleInputChange = (e) => {
		const files = e.target.files
		if (files && files.length) {
			onFileSelect(files)
		}
	}

	return (
		<div
			className={`drop-zone ${dragActive ? "active" : ""}`}
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			Drag & Drop Here Or{" "}
			<label htmlFor="file-upload">
				<strong>Browse</strong>
			</label>
			<input
				type="file"
				id="file-upload"
				name="file-upload"
				onChange={handleInputChange}
				onClick={handleInputChange}
			/>
		</div>
	)
}

export default FileDrop
