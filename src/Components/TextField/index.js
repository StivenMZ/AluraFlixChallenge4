import React from 'react';
import styled from 'styled-components';

const DivText = styled.div`
  position: relative;
  width: 100%;
  height: 87px;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  align-self: center;

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
  color: #E5E5E5;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  position: relative;
  top: 18%;
  margin-left: 3%;
`;

const ErrorMsg = styled.span`

font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;

color: #E53935;
margin-left: 3%;
`


const TextField = ({ placeholder, value, onChange, borderColor, type, error, valid }) => {
  return (
    <DivText>
      <SpanText>{placeholder}</SpanText>
      <InputText
        type={type || "text"}
        onChange={onChange}
        value={value}
        borderColor={borderColor}
      />
      {valid !== true && valid !== null && <ErrorMsg>{error}</ErrorMsg>}
    </DivText>
  );
};

export default TextField;
