import React from "react"
import ImageIcon from "./ImageIcon"
import ProgressBar from "./ProgressBar"

const UploadedDocument = ({ show, filename, filesize }) => {
	if (!show) {
		return null
	}

	let processedFileSize = parseInt(filesize) / 1000000
	processedFileSize = processedFileSize.toPrecision(2)

	return (
		<div className="uploaded-document-container-column">
			<hr className="full-division-line" />
			<div className="uploaded-document-container-row">
				<div className="image-icon-container">
					<ImageIcon />
				</div>
				<div className="fileinfo-container">
					<div className="filename-filesize">
						<p className="small-text gray-text">{filename}</p>
						<p className="small-text gray-text">
							{processedFileSize} MB
						</p>
					</div>
					<ProgressBar />
				</div>
			</div>
			<hr className="full-division-line" />
		</div>
	)
}

export default UploadedDocument
