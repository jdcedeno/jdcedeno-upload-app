import React from "react"

const UploadedDocument = ({ filename, filesize }) => {
	return (
		<div className="uploaded-document-container-column">
			<hr className="full-division-line" />
			<div className="uploaded-document-container-row">
				<ImageIcon />
				<div className="fileinfo-container">
					<div className="filename-filesize">
						<p>{filename}</p>
						<p>{filesize}</p>
					</div>
					<ProgressBar />
				</div>
			</div>
			<hr className="full-division-line" />
		</div>
	)
}

export default UploadedDocument
