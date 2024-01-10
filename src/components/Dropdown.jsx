import React, { useState } from "react"

const Dropdown = ({
	options,
	onSelect,
	placeholderText,
	placeholderClass,
	dropdownToggleClass,
}) => {
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
			<button className={dropdownToggleClass} onClick={toggleDropdown}>
				<div className="dropdown-toggle-text">
					<p className={placeholderClass}>
						{selectedOption
							? selectedOption.label
							: placeholderText}
					</p>
					<a className="down-arrow"></a>
				</div>
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
