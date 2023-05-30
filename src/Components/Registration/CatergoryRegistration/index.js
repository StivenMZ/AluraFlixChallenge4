import React, { useState, useEffect } from 'react';
import TextField from '../../TextField';
import DefaultPage from '../../DefaultPage';
import styled from 'styled-components';
import Button from '../../Button';

const Title = styled.h1`

    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 70px;
    
    display: flex;
    width: 100%;
    justify-content: center;

    
    color: #F5F5F5;
    `;
    

const Options = styled.select`
 appearance: none;
  -moz-appearance: none;
width: 94%;
border: none;
height: 46px;
font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    background: #53585D;
  color: #E5E5E5;
  border-radius: 4px;
  

  &:focus{
    outline: none;
    border-bottom: 3px solid #2A7AE4;
    
}
`;

const ElementOpt = styled.option`
font-size: 12px;

`;



const DivOptions = styled.div`
margin-top: 4%;
margin-bottom: 2%;
display: flex;
width: 100%;
justify-content: center;



`;

const DivBotones = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 6%;
`;

const DivSubBtn = styled.div`
gap: 10%;
width: 30%;
display: flex;
margin-left: 3%;
`
;

const DivBtnSo = styled.div`
display: flex;
margin-right: 3%;

`

const RegistroCategoria = () => {
    

  const [titulo, setTitulo] = useState('');
  const [color, setColor] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  
  
  const [categoria, setCategoria] = useState('');
  const [videosRegistrados, setVideosRegistrados] = useState([]);

  const selectCategoria  = (event) => {
    setCategoria(event.target.value);

  };


const updateValue = (value, setValue) => {
    setValue(value)
    console.log(value);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hola");
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica adicional relacionada con los videos registrados, como cargarlos desde la API
  }, []);

  return (
    <DefaultPage>
      <Title>Nueva Categoría</Title>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Nombre"
        onChange={(e)=>{
            updateValue(e.target.value, setTitulo)
        }}
          value={titulo}
          borderColor={"#2A7AE4"}
        />
        <TextField
          placeholder="Descripción"
          value={descripcion}
          onChange={(e)=>{
            updateValue(e.target.value, setDescripcion)
        }}
        borderColor={"#2A7AE4"}
        />
        <TextField
          type={"color"}
          placeholder="Color"
          value={color}
          onChange={(e)=>{
            updateValue(e.target.value, setColor)
        }}
        borderColor={"#2A7AE4"}
        span={"Color"}
        >
    
        </TextField>
        <TextField
          placeholder="Código de seguridad"
          value={codigoSeguridad}
          onChange={(e)=>{
            updateValue(e.target.value, setCodigoSeguridad)
        }}
        borderColor={"#2A7AE4"}
        />
    <DivBotones >
        <DivSubBtn>
        <Button borderColor={"#2A7AE4"} textColor={"white"} text={"Guardar"} backGround={"#2A7AE4"}></Button>
        <Button borderColor={"#9E9E9E"} textColor={"#000000"} text={"Limpiar"} backGround={"#9E9E9E"}></Button>
        </DivSubBtn>
    </DivBotones>
      </form>
    </DefaultPage>
  );
};

export default RegistroCategoria;
