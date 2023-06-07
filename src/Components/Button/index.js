import React from 'react';
import styled from 'styled-components';

const ButtonU = styled.button`
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  height: 3.375rem;
  color: ${props => props.textColor};
  background-color: ${props => props.backGround};
  border: 0.0625rem solid ${props => props.borderColor};
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.3125rem;
  line-height: 1.5rem;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.55;
  }

  @media screen and (max-width: 767px){
    font-size: 2.4rem;
    height: 5rem;
    border-radius: 1rem;
  
          
  }

`;

const Button = ({ text, onClick, textColor, backGround, borderColor, width, type}) => {
  return (
    <ButtonU
      onClick={onClick}
      textColor={textColor}
      backGround={backGround}
      borderColor={borderColor}
      width={width}
      type={type}
    >
      {text}
    </ButtonU>
  );
};

export default Button;
