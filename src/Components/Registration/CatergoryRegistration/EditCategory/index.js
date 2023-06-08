import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Popup = styled.div`
  color: blue;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background: #9E9E9E;
  padding: 2rem;
  width: 35%;
`;

const EditCategoryPopup = ({ category, onClose, updateCategory }) => {

  const actualizarCategoria = async () => {
    try {
      const response = await fetch(`http://localhost:3001/categories/${category.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          descripcion: descripcion,
          color: color,
          codigo: code,
        }),
      });

      if (response.ok) {
        const updatedCategory = {
          id: category.id,
          name: name,
          descripcion: descripcion,
          color: color,
          codigo: code,
        };

        updateCategory(updatedCategory);
        onClose();

        const videosResponse = await fetch(`http://localhost:3001/videos?category_like=${category.name}`);

        if (videosResponse.ok) {
          const videos = await videosResponse.json();

          const updatedVideos = videos.map(video => {
            if (video.category === category.name) {
              return {
                ...video,
                category: name,
              };
            }
            return video;
          });

          for (const video of updatedVideos) {
            const updateVideoResponse = await fetch(`http://localhost:3001/videos/${video.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(video),
            });

            if (!updateVideoResponse.ok) {
              console.log(`Error al actualizar el video con ID ${video.id}`);
            }
          }

          console.log("Videos actualizados exitosamente");
        } else {
          console.log("Error al obtener los videos");
        }
      } else {
        console.log("Error al actualizar la categoría");
      }
    } catch (error) {
      console.log("Error en la solicitud de actualización:", error);
    }
  };

  const [name, setName] = useState(category.name);
  const [descripcion, setDescripcion] = useState(category.descripcion);
  const [color, setColor] = useState(category.color);
  const [code, setCode] = useState(category.codigo);

  const setValue = (set, value) => {
    set(value);
  };

  return (
    <Popup>
      <PopupContent>
        <TitleS>Editar Categoría</TitleS>
        <PsS>Nombre</PsS>
        <InputS value={name} onChange={e => setValue(setName, e.target.value)} />
        <PsS>Descripción</PsS>
        <InputS value={descripcion} onChange={e => setValue(setDescripcion, e.target.value)} />
        <PsS>Color</PsS>
        <InputS value={color} type="color" onChange={e => setValue(setColor, e.target.value)} />
        <PsS>Código de seguridad</PsS>
        <InputS value={code} onChange={e => setValue(setCode, e.target.value)} />
      <DivBtns>
        <ButtonS onClick={actualizarCategoria}>Guardar</ButtonS>
        <ButtonS onClick={onClose}>Cancelar</ButtonS>
        </DivBtns>
      </PopupContent>
    </Popup>
  );
};

const TitleS = styled.h2`
text-align: center;
font-size: 2rem;
color: #F5F5F5;

`;

const PsS = styled.p`
font-size: 1.5rem;
color: #F5F5F5;


`;

const DivBtns = styled.div`
margin-top: 4%;
display: flex;
width: 100%;
gap: 1%;

`;

const ButtonS = styled.button`
cursor: pointer;
display: inline-block;
width: 50%;
height: 2rem;
font-size: 1.5rem;
background: #2A7AE4;
border: none;
color: #F5F5F5;
border-radius: 0.25rem;


&:hover{
  background: rgba(42, 122, 228, 0.6);
}


`

const InputS = styled.input`
width: 100%;
height: 2rem;
font-size: 1rem;
background: #53585D;
border: none;
color: #F5F5F5;
outline: none;

&:focus{
  border-bottom: 0.25rem solid #2A7AE4;
}

`;

export default EditCategoryPopup;
