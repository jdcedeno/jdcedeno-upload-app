import React, { useState } from "react"
import FileIcon from "./FileIcon"

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
			<FileIcon />
			<div className="file-upload-text-container">
				<p className="small-text">Drag & Drop Here Or&nbsp;</p>
				<label htmlFor="file-upload">
					<p className="small-text">
						<strong>Browse</strong>
					</p>
				</label>
				<input
					type="file"
					id="file-upload"
					name="file-upload"
					onChange={handleInputChange}
					onClick={handleInputChange}
				/>
			</div>
		</div>
	)
}

export default FileDrop
