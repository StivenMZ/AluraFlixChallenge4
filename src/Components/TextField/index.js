import React from 'react';
import styled from 'styled-components';

const DivText = styled.div`
  position: relative;
  width: 100%;
  height: 87px;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
`;

const InputText = styled.input`
  height: 55%;
  width: 94%;
  align-self: flex-end;
  background-color: #53585D;
  border-radius: 4px;
  color: #E5E5E5;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 3px solid ${props => props.borderColor};
  }
  
  &::placeholder {
    color: #E5E5E5;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
  }
`;

const SpanText = styled.span`
  position: absolute;
  top: 40%;
  left: 3%;
  color: #E5E5E5;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
`;

const TextField = ({ placeholder, value, onChange, borderColor, type }) => {
  return (
    <DivText>
      <SpanText>{placeholder}</SpanText>
      <InputText
        type={type || "text"}
        onChange={onChange}
        value={value}
        borderColor={borderColor}
      />
    </DivText>
  );
};

export default TextField;
