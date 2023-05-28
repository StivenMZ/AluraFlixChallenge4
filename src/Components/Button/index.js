import React from 'react';
import styled from 'styled-components';

const Button = ({ text, onClick, textColor, backGround, borderColor}) => {


  const ButtonU = styled.button`
    width: 180.12px;
    height: 54px;
    color: ${textColor};
    background-color: ${backGround};
    border: 1px solid ${borderColor};
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 21px;
    line-height: 24px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.55;
    }
  `;

  return <ButtonU onClick={onClick}>{text}</ButtonU>;
};

export default Button;
