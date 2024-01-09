import React, { useState } from "react"
import RadioButton from "./RadioButton"

const RadioGroup = ({ options, name, onChange }) => {
	const [selectedValue, setSelectedValue] = useState("")

	const handleChange = (e) => {
		setSelectedValue(e.target.value)
		if (onChange) {
			onChange(e.target.value)
		}
	}

	return (
		<div>
			{options.map((option) => (
				<RadioButton
					key={option.value}
					label={option.label}
					value={option.value}
					checked={selectedValue === option.value}
					onChange={handleChange}
					name={name}
				/>
			))}
		</div>
	)
}

export default RadioGroup
