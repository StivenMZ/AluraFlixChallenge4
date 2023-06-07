import React from 'react';
import styled from 'styled-components';

const DivText = styled.div`
  position: relative;
  width: 100%;
  height: 5.4375rem;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 767px){
    height: 7rem;
 } 

`;

const InputText = styled.input`
  height: 55%;
  width: 94%;
  align-self: flex-end;
  background-color: #53585D;
  border-radius: 0.25rem;
  color: #E5E5E5;
  font-weight: 300;
  font-size: 1rem;
  line-height: 0.875rem;
  align-self: center;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 0.1875rem solid ${props => props.borderColor};
  }
  
  &::placeholder {
    color: #E5E5E5;
    font-weight: 300;
    font-size: 1rem;
    line-height: 0.875rem;
  }

  @media screen and (max-width: 767px){
    font-size: 1.3rem;




  } 
`;

const SpanText = styled.span`
  color: #C2C2C2;
  font-weight: 300;
  font-size: 1rem;
  line-height: 0.875rem;
  position: relative;
  top: 18%;
  margin-left: 3%;

  @media screen and (max-width: 767px){
    font-size: 1.3rem;
    top: 21%;
  }
  
`;

const ErrorMsg = styled.span`

font-style: normal;
font-weight: 300;
font-size: 1rem;
line-height: 1.1875rem;

color: #E53935;
margin-left: 3%;
@media screen and (max-width: 767px){
    margin-top: 1%;
    font-size: 1.3rem;
  } 

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
