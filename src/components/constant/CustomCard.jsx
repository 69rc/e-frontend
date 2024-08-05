import React from 'react';

const CustomCard = ({ title, content, footer, style = {} }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '0.25rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    margin: '1rem 0',
    ...style
  };

  const headerStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const contentStyle = {
    fontSize: '1rem',
    marginBottom: '0.5rem'
  };

  const footerStyle = {
    fontSize: '0.875rem',
    color: '#555',
    borderTop: '1px solid #ddd',
    paddingTop: '0.5rem',
    marginTop: '0.5rem'
  };

  return (
    <div style={cardStyle}>
      {title && <div style={headerStyle}>{title}</div>}
      <div style={contentStyle}>{content}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};

export default CustomCard;
