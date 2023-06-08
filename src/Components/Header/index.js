import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../Images/Logo.png';
import { useState, useLayoutEffect  } from 'react';

const HeaderContainer = styled.header`
  /*1440 Width*/
  display: flex;
  width: 97%;
  align-items: center;
  justify-content: space-evenly;
  gap: 70%;
  padding: 1.39%;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 3px solid #2A7AE4;

  @media screen and (max-width: 767px) {
    gap: 30%;
  }
`;

const LogoSt = styled.img`
  width: 80%;
  height: 3.375rem;
  position: relative;
  left: 2%;

  @media screen and (max-width: 767px) {
    align-self: center;
  }
`;

const Header = () => {
  const location = useLocation();
  const [screen, setScreen] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setScreen(windowWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoSt src={Logo} alt="Logo de Aluraflix" />
      </Link>
      {(location.pathname === '/' && screen>769) && (
        <Link to="/new-video">
          <Button text="Nuevo video" textColor="#FFFFFF" backGround="#000000" borderColor="#F5F5F5" />
        </Link>
      )}
    </HeaderContainer>
  );
};

export default Header;
