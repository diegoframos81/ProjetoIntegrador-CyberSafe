/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;

  thead {
    background-color: #f2f2f2;
  }

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`;

const StyledButtonE = styled(Button)`
  position: relative;
  top: -6rem;
  left: 57rem;
`;

const StyledButton = styled(Button)`
  margin: 5px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

function StudentTable({ students, setStudents, handleEdit }) {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const studentsPerPage = 10;
  const navigate = useNavigate();

  const handleSelect = (index) => {
    const newSelectedStudents = [...selectedStudents];
    const selectedIndex = newSelectedStudents.indexOf(index);
    if (selectedIndex === -1) {
      newSelectedStudents.push(index);
    } else {
      newSelectedStudents.splice(selectedIndex, 1);
    }
    setSelectedStudents(newSelectedStudents);
  };

  const handleDelete = () => {
    const studentsToDelete = selectedStudents.map(index => students[index]);
    const deletePromises = studentsToDelete.map(student =>
      axios.delete(`${process.env.REACT_APP_API_URL}/students/${student.id}`)
    );

    Promise.all(deletePromises)
      .then(() => {
        const newStudents = students.filter((_, index) => !selectedStudents.includes(index));
        setStudents(newStudents);
        setSelectedStudents([]);
      })
      .catch(error => console.error('Erro ao excluir o aluno:', error));
  };

  const handleRowClick = (id, nome) => {
    navigate(`/tableCoef/${id}`);
    localStorage.setItem('nomeAluno', nome)
  };

  const filteredStudents = students.filter(student => student.nome.includes(filter));
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const displayedStudents = filteredStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);

  return (
    <div>
      <Form.Control type="text" placeholder="Filtrar por nome" value={filter} onChange={e => setFilter(e.target.value)} />
      <StyledButtonE variant="danger" onClick={handleDelete}>
        Excluir selecionados
      </StyledButtonE>
      <StyledTable>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Matricula</th>
            <th>Curso</th>
            <th>Responsável</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {displayedStudents.map((student, index) => (
            <tr key={index} onClick={() => handleRowClick(student.id, student.nome)}>
              <td><input type="checkbox" checked={selectedStudents.includes(index)} onChange={() => handleSelect(index)} /></td>
              <td>{student.nome}</td>
              <td>{student.idade}</td>
              <td>{student.matricula}</td>
              <td>{student.curso}</td>
              <td>{student.responsavel}</td>
              <td><StyledButton variant="warning" onClick={() => handleEdit(index)}>Editar</StyledButton></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <PaginationWrapper>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </PaginationWrapper>
    </div>
  );
}

export default StudentTable;
