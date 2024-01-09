import React from "react"

const RadioButton = ({ label, value, checked, onChange }) => {
	return (
		<label className="small-text">
			<input
				type="radio"
				value={value}
				checked={checked}
				onChange={onChange}
				className="radio-color"
			/>
			{label}
		</label>
	)
}

export default RadioButton
