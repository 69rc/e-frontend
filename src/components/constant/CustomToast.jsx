import React, { useState } from 'react';

const CustomToast = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  const toastStyle = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '0.25rem',
    backgroundColor: '#343a40',
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  };

  const messageStyle = {
    flex: 1
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.25rem',
    cursor: 'pointer',
    marginLeft: '0.5rem'
  };

  return (
    visible && (
      <div style={toastStyle}>
        <span style={messageStyle}>{message}</span>
        <button style={closeButtonStyle} onClick={handleClose}>×</button>
      </div>
    )
  );
};

export default CustomToast;
