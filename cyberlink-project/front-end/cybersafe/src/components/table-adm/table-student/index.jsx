import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledButtonE = styled(Button)`
  /* Estilo para o botão de exclusão */
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

function StudentTable({ students, setStudents }) {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
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

  const handleRowClick = (studentId) => {
    navigate(`/tableCoef/${studentId}`);
  };

  const handleEditClick = (event, student) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para o contêiner da linha
    setEditingStudent(student);
    setShowModal(true);
  };

  const handleModalClose = () => setShowModal(false);

  const handleModalSave = () => {
    axios.put(`http://77.37.69.162:5173/students/${editingStudent.id}`, editingStudent)
      .then(response => {
        const updatedStudents = students.map(student =>
          student.id === editingStudent.id ? editingStudent : student
        );
        setStudents(updatedStudents);
        setShowModal(false);
      })
      .catch(error => console.error('Erro ao editar o aluno:', error));
  };

  const filteredStudents = students.filter(student => student.nome.includes(filter));
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const displayedStudents = filteredStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);

  return (
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12'>
        <StyledButtonE variant="btn btn-outline-danger float-right mb-3" onClick={handleDelete}>
          Excluir selecionados
        </StyledButtonE>
        <Form.Control 
          type="text" 
          placeholder="Filtrar por nome" 
          value={filter} 
          onChange={e => setFilter(e.target.value)} 
          className='mb-3'
        />
        <div className="table-responsive">
          <table className="table">
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
                <tr key={index} onClick={() => handleRowClick(student.id)}>
                  <td>
                    <input type="checkbox" checked={selectedStudents.includes(index)} onChange={() => handleSelect(index)} />
                  </td>
                  <td>{student.nome}</td>
                  <td>{student.idade}</td>
                  <td>{student.matricula}</td>
                  <td>{student.curso}</td>
                  <td>{student.responsavel}</td>
                  <td>
                    <StyledButton variant="btn btn-info" onClick={(e) => handleEditClick(e, student)}>Editar</StyledButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

        {/* Modal de Edição */}
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Estudante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingStudent?.nome || ''} 
                  onChange={(e) => setEditingStudent({ ...editingStudent, nome: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formIdade">
                <Form.Label>Idade</Form.Label>
                <Form.Control 
                  type="number" 
                  value={editingStudent?.idade || ''} 
                  onChange={(e) => setEditingStudent({ ...editingStudent, idade: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMatricula">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingStudent?.matricula || ''} 
                  onChange={(e) => setEditingStudent({ ...editingStudent, matricula: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCurso">
                <Form.Label>Curso</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingStudent?.curso || ''} 
                  onChange={(e) => setEditingStudent({ ...editingStudent, curso: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formResponsavel">
                <Form.Label>Responsável</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingStudent?.responsavel || ''} 
                  onChange={(e) => setEditingStudent({ ...editingStudent, responsavel: e.target.value })} 
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleModalSave}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default StudentTable;
