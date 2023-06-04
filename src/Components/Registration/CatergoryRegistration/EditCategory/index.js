import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Popup = styled.div`
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
  background: #fff;
  padding: 20px;
`;

const EditCategoryPopup = ({ category, onClose, updateCategory  }) => {
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
        <h2>Editar Categoría</h2>
        <p>Nombre: </p> <input value={name} onChange={(e) => setValue(setName, e.target.value)} />
        <p>Descripción: </p> <input value={descripcion} onChange={(e) => setValue(setDescripcion, e.target.value)} />
        <p>Color: </p> <input value={color} type="color" onChange={(e) => setValue(setColor, e.target.value)} />
        <p>Código de seguridad: </p> <input value={code} onChange={(e) => setValue(setCode, e.target.value)} />
        <button onClick={actualizarCategoria}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </PopupContent>
    </Popup>
  );
};

export default EditCategoryPopup;
