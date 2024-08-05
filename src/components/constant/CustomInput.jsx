import React from 'react';

const CustomInput = ({ label, type = 'text', style = {}, ...props }) => {
  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    ...style
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
    color: '#333'
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label style={labelStyle}>{label}</label>}
      <input type={type} style={inputStyle} {...props} />
    </div>
  );
};

export default CustomInput;
