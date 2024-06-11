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
    const studentsToDelete = selectedStudents.map(index => students[index]);
    const deletePromises = studentsToDelete.map(student =>
      axios.delete(`http://77.37.69.162:5173/students/${student.id}`)
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
    <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <Button variant="danger" onClick={handleDelete} className='float-right margin-bottom-15'>
            Excluir selecionados
          </Button>
          <Form.Control type="text" placeholder="Filtrar por nome" value={filter} className='margin-bottom-15' onChange={e => setFilter(e.target.value)} />
          <Table striped bordered hover responsive table="true">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Matricula</th>
                <th scope="col">Curso</th>
                <th scope="col">Responsável</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student, index) => (
                <tr key={index}>
                  <td scope="row"><input type="checkbox" checked={selectedStudents.includes(index)} onChange={() => handleSelect(index)} /></td>
                  <td scope="row">{student.nome}</td>
                  <td scope="row">{student.idade}</td>
                  <td scope="row">{student.matricula}</td>
                  <td scope="row">{student.curso}</td>
                  <td scope="row">{student.responsavel}</td>
                  <td scope="row"><Button variant="warning" onClick={() => handleEdit(index)}>Editar</Button></td>
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
    </div>
  );
}

export default StudentTable;
