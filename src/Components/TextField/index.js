import React from 'react';
import styled
from 'styled-components';

const DivText = styled.div`
width: 100%;
height: 87px;
display: flex;
margin-bottom: 3%;
border: none;
justify-content: center;
`; 


const TextField = ({ placeholder, value, onChange, borderColor }) => {

  const InputText = styled.input`
  height: 50%;
  width: 94%;
  align-self: flex-end;
  background-color: #53585D;
  border-radius: 4px;
  color: #E5E5E5;
  font-weight: 300;
     font-size: 12px;
     line-height: 14px;
  
  &:focus{
  outline: none;
  border: none;
  border-bottom: 3px solid ${borderColor};
  }
  
  &::placeholder {
      color: #E5E5E5;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
    }
  
  `


  return (
    <DivText>
<InputText
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      >
</InputText>
      </DivText>
  );
};

export default TextField;
