import React, { useState, useEffect } from 'react';
import TextField from '../../TextField';
import styled from 'styled-components';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import { validCodigo, validDescripcion, validEnlace, validTitle } from './Validaciones';
import Succes from '../../Succes';

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
  align-self: center;

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
flex-direction: column;


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
const ErrorCategoria = styled.span`
font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgb(229, 57, 53);
    margin-left: 3%;

`;

const RegistroVideo = () => {

  /*POP UP FINAL DE CONFIRMACIÓN*/
  const [showPopup, setShowPopup] = useState(false);
  const [showMessage, setShowMessage] = useState('');


  const [titulo, setTitulo] = useState({ value: '', valid: null, error: '' });

  const mensajesError = ["", "El título debe tener al menos 2 carácteres", "El título no puede ser mayor a 30 carácteres",]


  const [enlaceVideo, setEnlaceVideo] = useState({ value: '', valid: null, error: '' });

  const enlaceError = ["", "El enlace debe tener al menos un signo . y un signo /", "El enlace no puede ser menor a 3 carácteres",]
  const [enlaceImagen, setEnlaceImagen] = useState({ value: '', valid: null, error: '' });

  const [descripcion, setDescripcion] = useState({ value: '', valid: null, error: '' });

  const descripcionError = ["", "La descripción debe tener más de 7 o más carácteres", "La descripción no puede superar los 60 carácteres",]

  const [codigoSeguridad, setCodigoSeguridad] = useState({ value: '', valid: null, error: '' });

  const codigoError = ["", "El código debe ser de 3 o más carácteres", "El código debe incluir el signo # seguido de letrás y/o números",]

  const [categoria, setCategoria] = useState({ value: '', valid: false, error: '' });

  const categoriaError =['', "Debes seleccionar una categoría"];

  const selectCategoria = (event) => {
    setCategoria({ value: event.target.value, valid: true });
  };

  const campoVacio = (campo) => campo.length === 0;


  const limpiarCampos = () =>{
  let todosCampos = [titulo, enlaceVideo, enlaceImagen, descripcion, codigoSeguridad]
  let setCampos = [setTitulo, setEnlaceVideo, setEnlaceImagen, setDescripcion, setCodigoSeguridad]
  for(let i = 0; i<todosCampos.length; i++){
    setCampos[i]({value: '', valid: false })
  }
  setCategoria({ value: '', valid: false, error: ''}); 
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let campoNoVacio = false;
    const mensajeVacio = 'Este campo no puede estar vacío'
    if (campoVacio(titulo.value)) {
      setTitulo({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = true;
    } else {
      campoNoVacio = true;
    }
    if (campoVacio(enlaceVideo.value)) {
      setEnlaceVideo({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = false;
    } else {
      campoNoVacio = true;
    }
    if (campoVacio(enlaceImagen.value)) {
      setEnlaceImagen({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = false;
    } else {
      campoNoVacio = true;
    }

    if (campoVacio(categoria.value)) {
      setCategoria({ value: '', valid: false, error: categoriaError[1]});
      campoNoVacio = false;
    } else {
      campoNoVacio = true;
    }

    if (campoVacio(descripcion.value)) {
      setDescripcion({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = false;
    } else {
      campoNoVacio = true;
    }
    if (campoVacio(codigoSeguridad.value)) {
      setCodigoSeguridad({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = false;
    } else {
      campoNoVacio = true;
    }
    if (campoNoVacio) {
      if (titulo.valid &&
        enlaceVideo.valid &&
        enlaceImagen.valid &&
        categoria.valid &&
        descripcion.valid &&
        codigoSeguridad.valid) {
        try {
          const response = await fetch("http://localhost:3001/videos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              titulo: titulo.value,
              urlVideo: enlaceVideo.value,
              urlImagen: enlaceImagen.value,
              category: categoria.value,
              descripcion: descripcion.value,
              codigo: codigoSeguridad.value
            }),
          });

          if (response.ok) {
            setShowMessage('Video registrado exitosamente');
            setShowPopup(true);
          } else {
            setShowMessage('Lo sentimos, hubo un error, intenta nuevamente');
            setShowPopup(true);
          }

        } catch (err) {
          console.log(err);
          console.log("Error al conectar a json server")
        }
      }
    }






  };


  const updateValue = (value, valid, erro, setValue, arrErr) => {
    if (value.length === 0) {
      setValue({ value: value, valid: true, error: arrErr[0] });
    } else {
      setValue({ value: value, valid: valid, error: arrErr[erro] });
    }
  };

  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch("http://localhost:3001/categories", {
          method: "GET",
        });

        if (response.ok) {
          const categoriasData = await response.json();
          setCategorias(categoriasData);
        } else {
          console.log("Error al obtener las categorías");
        }
      } catch (error) {
        console.log("Error en la solicitud de categorías:", error);
      }
    };

    fetchCategorias();
  }, []);


  const handleClosePopup = () => {
    setShowPopup(false);
  };


  
  return (
    <>
      <Title>Registro de Nuevo Video</Title>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Título"
          value={titulo.value}
          onChange={(e) => {
            const value = e.target.value;
            const valido = validTitle(value);
            updateValue(value, valido.valid, valido.error, setTitulo, mensajesError)
          }}
          error={titulo.error}
          valid={titulo.valid}
          borderColor={"#2A7AE4"}
        />
        <TextField
          placeholder="Link del video"
          value={enlaceVideo.value}
          onChange={(e) => {
            const value = e.target.value;
            const valido = validEnlace(value);
            updateValue(value, valido.valid, valido.error, setEnlaceVideo, enlaceError)
          }}
          error={enlaceVideo.error}
          valid={enlaceVideo.valid}
          borderColor={"#2A7AE4"}
        />
        <TextField
          placeholder="Link imagen del video"
          value={enlaceImagen.value}
          onChange={(e) => {
            const value = e.target.value;
            const valido = validEnlace(value);
            updateValue(value, valido.valid, valido.error, setEnlaceImagen, enlaceError)
          }}
          error={enlaceImagen.error}
          valid={enlaceImagen.valid}
          borderColor={"#2A7AE4"}
        />
        <DivOptions>
          <Options id="categoria" value={categoria.value} onChange={selectCategoria}>
            <ElementOpt disabled hidden value="">
              Selecciona una categoría
            </ElementOpt>
            {categorias.map((cate) => {
              return <ElementOpt key={cate.id}>{cate.name}</ElementOpt>;
            })}
          </Options>
          <ErrorCategoria>{categoria.error}</ErrorCategoria>
        </DivOptions>
        <TextField
          placeholder="Descripción del video"
          value={descripcion.value}
          onChange={(e) => {
            const value = e.target.value;
            const valido = validDescripcion(value);
            updateValue(value, valido.valid, valido.error, setDescripcion, descripcionError)
          }}
          error={descripcion.error}
          valid={descripcion.valid}
          borderColor={"#2A7AE4"}
        />
          <TextField
            placeholder="Código de seguridad"
            value={codigoSeguridad.value}
            onChange={(e) => {
              const value = e.target.value;
              const valido = validCodigo(value);
              updateValue(value, valido.valid, valido.error, setCodigoSeguridad, codigoError)
            }}
            error={codigoSeguridad.error}
            valid={codigoSeguridad.valid}
            borderColor={"#2A7AE4"}
          />
        <DivBotones >
          <DivSubBtn>
            <Button borderColor={"#2A7AE4"} textColor={"white"} text={"Registrar"} backGround={"#2A7AE4"} type={"submit"}></Button>
            <Button type="button" borderColor={"#9E9E9E"} textColor={"#000000"} text={"Limpiar"} backGround={"#9E9E9E"} onClick={()=>limpiarCampos()}></Button>
          </DivSubBtn>
          <DivBtnSo>
            <Link to="/new-category">
              <Button width={195} borderColor={"#2A7AE4"} textColor={"white"} text={"Nueva Categoría"} backGround={"#2A7AE4"}></Button>
            </Link>
          </DivBtnSo>
        </DivBotones> 
        {showPopup && (
  <Succes
    message={showMessage}
    onClose={handleClosePopup}
  />
)}

      </form>
    </>
  );
};

export default RegistroVideo;
