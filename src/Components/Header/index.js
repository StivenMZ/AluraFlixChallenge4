import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../Images/Logo.png';

const HeaderContainer = styled.header`
/*1440 Width*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 3px solid #2A7AE4;


`;

const LogoSt = styled.img`
  width: 180.12px;
  height: 54px;
  position: relative;
  left: 2%;
`;
const  Header =() => {
  const BtnNewVideo = () => {   
    console.log("1")
   
  };

const location = useLocation();
console.log(location)

  return (
    <HeaderContainer>
      <Link to="/"><LogoSt src={Logo} alt="Logo de Aluraflix" /> </Link>
      {location.pathname == "/" && (
      <Link to="/new-video">
        <Button text="Nuevo video" textColor="#FFFFFF" backGround="#000000" borderColor="#F5F5F5" />
      </Link>
      )}
    </HeaderContainer>
  );
}

export default Header;
