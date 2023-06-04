import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import EditCategoryPopup from "../EditCategory";

const DivTable = styled.div`
  width: 100%;
  display: flex;  
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  border: 1px solid white;
  color: white;
`;

const TrTable = styled.tr`
  height: 50px;
  font-size: 35px;
`;

const TrSubTable = styled.tr`
  height: 50px;
  font-size: 27px;
`;

const TdTable = styled.td`
  border: 1px solid white;
`;

const TableC = ({ categorias, deleteCate, editCategory, updateCategory }) => {
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openEditPopup = (categoria) => {
    setSelectedCategory(categoria);
    setEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setSelectedCategory(null);
    setEditPopupOpen(false);
  };

  const handleUpdateCategory = (updatedCategory) => {
    updateCategory(updatedCategory);
  };

  return (
    <DivTable>
      <Table>
        <thead>
          <TrTable>
            <TdTable>Nombre</TdTable>
            <TdTable>Descripción</TdTable>
            <TdTable>Editar</TdTable>
            <TdTable>Remover</TdTable>
          </TrTable>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <TrSubTable key={categoria.id} data-id={categoria.id}>
              <TdTable>{categoria.name}</TdTable>
              <TdTable>{categoria.descripcion}</TdTable>
              <TdTable>
                <button onClick={() => openEditPopup(categoria)}>Editar</button>
              </TdTable>
              <TdTable>
                <button onClick={() => deleteCate(categoria.id)}>Remover</button>
              </TdTable>
            </TrSubTable>
          ))}
        </tbody>
      </Table>
      {editPopupOpen && (
        <EditCategoryPopup
          category={selectedCategory}
          onClose={closeEditPopup}
          updateCategory={handleUpdateCategory} 
        />
      )}
    </DivTable>
  );
};

export default TableC;
