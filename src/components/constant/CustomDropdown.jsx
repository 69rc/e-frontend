import React, { useState } from 'react';

const CustomDropdown = ({ options, onSelect, placeholder = 'Select an option', style = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  const dropdownStyle = {
    position: 'relative',
    display: 'inline-block',
    ...style
  };

  const toggleStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '0.25rem',
    backgroundColor: 'white',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  const menuStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '0.25rem',
    backgroundColor: 'white',
    zIndex: 1000,
    padding: '0'
  };

  const itemStyle = {
    padding: '0.5rem',
    cursor: 'pointer'
  };

  return (
    <div style={dropdownStyle}>
      <button style={toggleStyle} onClick={handleToggle}>
        {selected ? selected.label : placeholder}
      </button>
      {isOpen && (
        <ul style={menuStyle}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              style={itemStyle}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
