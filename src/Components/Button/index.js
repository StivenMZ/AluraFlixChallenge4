import React from 'react';
import styled from 'styled-components';

const ButtonU = styled.button`
  width: ${props => (props.width ? `${props.width}px` : "180.12px")};
  height: 54px;
  color: ${props => props.textColor};
  background-color: ${props => props.backGround};
  border: 1px solid ${props => props.borderColor};
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
