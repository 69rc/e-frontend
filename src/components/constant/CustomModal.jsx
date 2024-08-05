import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const CustomModal = ({ isOpen, toggle, title, children, footerButtons }) => {
  const modalStyle = {
    maxWidth: '800px',
    width: '100%'
  };

  const headerStyle = {
    backgroundColor: '#343a40',
    color: 'white'
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'flex-end'
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} style={modalStyle}>
      <ModalHeader toggle={toggle} style={headerStyle}>
        {title}
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter style={footerStyle}>
        {footerButtons.map((button, index) => (
          <Button key={index} color={button.color} onClick={button.onClick}>
            {button.label}
          </Button>
        ))}
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
