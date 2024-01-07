import React, { useState } from "react"

const Dropdown = ({ options, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		onSelect(option)
		setIsOpen(false)
	}

	return (
		<div className="dropdown">
			<button className="dropdown-toggle" onClick={toggleDropdown}>
				{selectedOption ? selectedOption.label : "Select an option"}
			</button>
			{isOpen && (
				<ul className="dropdown-menu">
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Dropdown
