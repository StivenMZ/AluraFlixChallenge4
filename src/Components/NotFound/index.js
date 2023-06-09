import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Link } from 'react-router-dom';


const NotFoundContainer = styled.div`
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  color: #E5E5E5;
`;


const NotFound = () => {
  const handleVolverClick = () => {
    // Implementa aquí la lógica para volver a la página anterior
  };

  return (
    <NotFoundContainer>
      <NotFoundTitle>Página no encontrada</NotFoundTitle>
      <Link to="/">
      <Button text="Volver" textColor="#FFFFFF" backGround="#2A7AE4" borderColor="#2A7AE4" />
    </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
