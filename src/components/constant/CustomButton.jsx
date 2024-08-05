import React from 'react';

const CustomButton = ({ children, onClick, variant = 'primary', style = {}, ...props }) => {
  const buttonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
    color: 'white',
    ...style
  };

  const hoverStyle = {
    backgroundColor: variant === 'primary' ? '#0056b3' : '#5a6268'
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
