import React from "react";
import styled from "styled-components";
import { useState } from "react";
import EditCategoryPopup from "../EditCategory";

const DivTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: separate;
  width: 90%;
  border: 0.0625rem solid #2A7AE4;
  color: white;
  margin-bottom: 3%;


  td {
    border: 0.0625rem solid rgba(0, 0, 0, 0.9);
    border-color: rgba(0, 0, 0, 0.9);
    border-right: none;
    padding-left: 1%;
  }


  tr:first-child td.first {
    border-top: 0;
    border-color: #2A7AE4;
  }
  
  tr:nth-child(1) td {
    border-top-color: #2A7AE4;
  }

  tr:last-child td {
    border-bottom: none;
  }

  td:first-child {
    border-left: none;
  }

  td:last-child {
    border-right: none;
  }
`;

const TrTable = styled.tr`
  height: 3.125rem;
  font-size: 2.1875rem;
`;

const TrSubTable = styled.tr`
  height: 3.125rem;
  font-size: 1.6875rem;
`;

const TdTable = styled.td`

`;

const AdTable = styled.a`
cursor: pointer;

&:hover{
  color: gray;
}

`

const TableC = ({ categorias, deleteCate, updateCategory }) => {
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
            <TdTable className="first">Nombre</TdTable>
            <TdTable className="first">Descripción</TdTable>
            <TdTable className="first">Editar</TdTable>
            <TdTable className="first">Remover</TdTable>
          </TrTable>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <TrSubTable key={categoria.id} data-id={categoria.id}>
              <TdTable>{categoria.name}</TdTable>
              <TdTable>{categoria.descripcion}</TdTable>
              <TdTable>
                <AdTable onClick={() => openEditPopup(categoria)}>Editar</AdTable>
              </TdTable>
              <TdTable>
                <AdTable onClick={() => deleteCate(categoria.id)}>Remover</AdTable>
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
