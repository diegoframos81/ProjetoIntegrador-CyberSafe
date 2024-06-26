/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import StudentModal from '../modal-student/index';
import StudentTable from '../table-student/index';

const AddButton = styled(Button)`
  margin-bottom: 20px;
`;

function DataTable() {
  const [show, setShow] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ nome: '', idade: '', matricula: '', curso: '', responsavel: '' });
  const [multiAdd, setMultiAdd] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    axios.get('http://77.37.69.162:5173/students') // Alteração na URL
      .then(response => setStudents(response.data))
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }, []);

  const handleClose = () => {
    setShow(false);
    setEditIndex(null);
    setStudent({ nome: '', idade: '', matricula: '', curso: '', responsavel: '' });
  };

  const handleShow = () => setShow(true);

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedStudent = students[editIndex];
      axios.put(`http://77.37.69.162:5173/students/${updatedStudent.id}`, student) // Alteração na URL
        .then(response => {
          const newStudents = [...students];
          newStudents[editIndex] = response.data;
          setStudents(newStudents);
        })
        .catch(error => console.error('Erro ao editar o aluno:', error));
    } else {
      axios.post('http://77.37.69.162:5173/students', student) // Alteração na URL
        .then(response => setStudents([...students, response.data]))
        .catch(error => console.error('Erro ao adicionar o aluno:', error));
    }
    setStudent({ nome: '', idade: '', matricula: '', curso: '', responsavel: '' });
    if (!multiAdd) {
      handleClose();
    }
  };

  const handleEdit = (index) => {
    setStudent(students[index]);
    setEditIndex(index);
    handleShow();
  };

  return (
    <div className="App">
      <AddButton variant="primary" onClick={handleShow}>
        + Alunos
      </AddButton>

      <StudentModal
        show={show}
        handleClose={handleClose}
        handleSave={handleSave}
        student={student}
        setStudent={setStudent}
        multiAdd={multiAdd}
        setMultiAdd={setMultiAdd}
      />

      <StudentTable
        students={students}
        setStudents={setStudents}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default DataTable;
