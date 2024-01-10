import React, { useState } from "react"

const ToggleSwitch = ({ onChange }) => {
	const [isToggled, setIsToggled] = useState(false)

	const handleToggle = () => {
		setIsToggled(!isToggled)
		if (onChange) {
			onChange(isToggled)
		}
	}

	return (
		<div className="toggle-switch">
			<input
				type="checkbox"
				id="toggle"
				checked={isToggled}
				onChange={handleToggle}
			/>
			<label htmlFor="toggle" className="switch"></label>
		</div>
	)
}

export default ToggleSwitch
