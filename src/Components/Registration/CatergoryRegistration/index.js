import React, { useState, useEffect } from 'react';
import TextField from '../../TextField';
import DefaultPage from '../../DefaultPage';
import styled from 'styled-components';
import Button from '../../Button';
import { validCodigo, validDescripcion, validTitle } from './validaciones';
import Succes from '../../Succes';
import TableC from './Table';

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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const editCategory = (category) => {
    setSelectedCategory(category);
  };
  


  const deleteCate = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/categories/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualizar la lista de categorías después de eliminar
        const updatedCategorias = categorias.filter((categoria) => categoria.id !== id);
        setCategorias(updatedCategorias);
      } else {
        console.log("Error al eliminar la categoría");
      }
    } catch (error) {
      console.log("Error en la solicitud de eliminación:", error);
    }
  };
    
   /*POP UP FINAL DE CONFIRMACIÓN*/
   const [showPopup, setShowPopup] = useState(false);
   const [showMessage, setShowMessage] = useState('');

  const [titulo, setTitulo] = useState({ value: '', valid: false, error: '' });

  const errorTitulo = ['', 'El título debe tener 2 o más carácteres', 'El título no puede ser mayor a 20 carácteres'];


  const [color, setColor] = useState({ value: '', valid: false, error: '' });

  const colorError = [''];

  const [descripcion, setDescripcion] = useState({ value: '', valid: false, error: '' });

  const descripcionError = ["", "La descripción debe tener más de 7 o más carácteres", "La descripción no puede superar los 40 carácteres",]


  const [codigoSeguridad, setCodigoSeguridad] = useState({ value: '', valid: false, error: '' });
  
  const codigoError = ["", "El código debe ser de 3 o más carácteres", "El código debe incluir el signo # seguido de letrás y/o números",]
  


  const updateValue = (value, valid, erro, setValue, arrErr) => {
    if (value.length === 0) {
      setValue({ value: value, valid: true, error: arrErr[0] });
    } else {
      setValue({ value: value, valid: valid, error: arrErr[erro] });
    }
  };

  const campoVacio = (campo) => campo.length === 0;

  const handleSubmit = async (e)  => {
    e.preventDefault();
    let campoNoVacio = false;
    const mensajeVacio = 'Este campo no puede estar vacío'
    if (campoVacio(titulo.value)) {
      setTitulo({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = true;
    } else {
      campoNoVacio = true;
    }
    if (campoVacio(descripcion.value)) {
    
      setDescripcion({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = true;
    } else {
      campoNoVacio = true;
    }if (campoVacio(color.value)) {
      setColor({ value: '', valid: false, error: "Selecciona algún color"});
      campoNoVacio = true;
    } else {
      campoNoVacio = true;
    }
    if (campoVacio(codigoSeguridad.value)) {
      setCodigoSeguridad({ value: '', valid: false, error: mensajeVacio });
      campoNoVacio = true;
    } else {
      campoNoVacio = true;
    }
    if (campoNoVacio) {
      if (titulo.valid &&
        descripcion.valid &&
        color.valid &&
        codigoSeguridad.valid) {
          try {
            const response = await fetch('http://localhost:3001/categories', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },  
              body: JSON.stringify({
                name: titulo.value,
                descripcion: descripcion.value,
                color: color.value,
                codigo: codigoSeguridad.value
              }),
            });
            if (response.ok){
              const nuevaCategoria =  await response.json();

                setCategorias((categorias) => [...categorias, nuevaCategoria]);



              setShowMessage('Categoria registrada exitosamente');
              setShowPopup(true);

            } else {
              setShowMessage('Hubo un error, por favor intente nuevamente');
              setShowPopup(true);
            }
            
          } catch (err) {
            console.log(err);
            console.log("Error al conectar a json server")
          }
        }

    
  };

};


const limpiarCampos = () =>{
  let todosCampos = [titulo, descripcion, color,codigoSeguridad]
  let setCampos = [setTitulo, setDescripcion, setColor, setCodigoSeguridad]
  for(let i = 0; i<todosCampos.length; i++){
    setCampos[i]({value: '', valid: false })
  }
  }
  
 
  const [categorias, setCategorias] = useState([]);

  const handleUpdateCategory = (updatedCategory) => {
    // Actualizar la categoría en el estado categories
    const updatedCategories = categorias.map((category) => {
      if (category.id === updatedCategory.id) {
        return updatedCategory; 
      }
      return category;
    });
    setCategorias(updatedCategories);
  };
  
  

  useEffect(() => { 
    const fetchCategorias = async () => {
      try {
        const response = await fetch("http://localhost:3001/categories", {
          method: "GET",
        });

        if (response.ok) {
          const categoriasData = await response.json();
          setCategorias(categoriasData);
          console.log(categorias);
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
      <Title>Nueva Categoría</Title>
      <form onSubmit={handleSubmit}>
       <TextField
          placeholder="Nombre"
          value={titulo.value}
          onChange={(e) => {
            const value = e.target.value;
            const valido = validTitle(value);
            updateValue(value, valido.valid, valido.error, setTitulo, errorTitulo)
          }}
        error={titulo.error}
        valid={titulo.valid}
        borderColor={"#2A7AE4"}

        />
        <TextField
          placeholder="Descripción"
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
          type={"color"}
          placeholder="Color"
          value={color.value}
          onChange={(e) => {
            const value = e.target.value;
            updateValue(value, true, 0, setColor, colorError);
          }}
        error={color.error}
        valid={color.valid}
        borderColor={"#2A7AE4"}
        >
    
        </TextField>
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
        <Button borderColor={"#2A7AE4"} textColor={"white"} text={"Guardar"} backGround={"#2A7AE4"} type={"submit"}></Button>
        <Button borderColor={"#9E9E9E"} textColor={"#000000"} text={"Limpiar"} backGround={"#9E9E9E"} type={"button"} onClick={()=> limpiarCampos()}></Button>
        </DivSubBtn>
    </DivBotones>
    {showPopup && (
  <Succes
    message={showMessage}
    onClose={handleClosePopup}
  />
)}
      </form>
     <TableC categorias={categorias} deleteCate={deleteCate} editCategory={editCategory} updateCategory={handleUpdateCategory}/>   
      </>
  );
};




export default RegistroCategoria;
