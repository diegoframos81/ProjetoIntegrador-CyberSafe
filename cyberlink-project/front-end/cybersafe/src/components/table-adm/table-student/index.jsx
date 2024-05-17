/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Table, Pagination as BSPagination, Form } from 'react-bootstrap';
import styled from 'styled-components';

//style

const Pagination = styled(BSPagination)`
    
  .page-item.active .page-link::after {
    content: "" !important;
  }
  .page-item.active .page-link::before {
    content: "" !important;
  }
`;

//inicio da função
function StudentTable({ students, setStudents, handleEdit }) {

//recebendo as props dos inputs do modal; lista, atualizar lista e edição da lista
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const studentsPerPage = 10;

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
    setStudents(students.filter((_, index) => !selectedStudents.includes(index)));
    setSelectedStudents([]);
  };

  const filteredStudents = students.filter(student => student.nome.includes(filter));
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const displayedStudents = filteredStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);

  return (
    <div>
      <Form.Control type="text" placeholder="Filtrar por nome" value={filter} onChange={e => setFilter(e.target.value)} />
      <Button variant="danger" onClick={handleDelete}>
        Excluir selecionados
      </Button>
      <Table striped bordered hover>
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
            <tr key={index}>
              <td><input type="checkbox" checked={selectedStudents.includes(index)} onChange={() => handleSelect(index)} /></td>
              <td>{student.nome}</td>
              <td>{student.idade}</td>
              <td>{student.matricula}</td>
              <td>{student.curso}</td>
              <td>{student.responsavel}</td>
              <td><Button variant="warning" onClick={() => handleEdit(index)}>Editar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default StudentTable;
