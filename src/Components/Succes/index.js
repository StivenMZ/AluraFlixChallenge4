import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: #9E9E9E;
  padding: 1.25rem;
  border-radius: 0.25rem;
  width: 20%;
  text-align: center;
`;

const Button = styled.button`
margin-top: 5%;
  background-color: #2A7AE4;
  color: #F5F5F5;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.25rem;
  padding: 0.625rem 1.25rem;
  cursor: pointer;

  &:hover{
    opacity: 0.6;
  }
`;

const PsMessage = styled.p`
font-size: 1.5rem;
color: #F5F5F5;

`;

const Succes = ({ message, onClose }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
    onClose(); // Llamar a la función onClose pasada como prop
  };

  return (
    <>
      {showPopup && (
        <PopupContainer>
          <PopupContent>
            <PsMessage>{message}</PsMessage>
            <Button onClick={handleAccept}>Aceptar</Button>
          </PopupContent>
        </PopupContainer>
      )}
    </>
  );
};

export default Succes;
