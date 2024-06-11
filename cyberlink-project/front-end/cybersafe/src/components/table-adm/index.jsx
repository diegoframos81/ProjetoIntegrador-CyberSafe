/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import StudentModal from './modal-student/index';
import StudentTable from './table-student/index';

const AddButton = styled(Button)``;


function DataTable() {
  const [show, setShow] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ nome: '', idade: '', matricula: '', curso: '', responsavel: '' });
  const [multiAdd, setMultiAdd] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    axios.get('http://77.37.69.162:5173/students')
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
      const updatedStudent = { ...students[editIndex], ...student };
      axios.put(`http://77.37.69.162:5173/students/${updatedStudent.id}`, updatedStudent)
        .then(response => {
          const newStudents = [...students];
          newStudents[editIndex] = response.data;
          setStudents(newStudents);
        })
        .catch(error => console.error('Erro ao editar o aluno:', error));
    } else {
      axios.post('http://77.37.69.162:5173/students', student)
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
    <div className="row">
      <div className='col-lg-12 col-md-12 col-sm-12'>
        <div className='row'> 
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <AddButton variant="btn btn-outline-primary" onClick={handleShow}>
              + Alunos
            </AddButton>
          </div>
        </div>
        <StudentModal
          show={show}
          handleClose={handleClose}
          handleSave={handleSave}
          student={student}
          setStudent={setStudent}
          multiAdd={multiAdd}
          setMultiAdd={setMultiAdd}
        />
        <div className='row'> 
          <div className='col-lg-12 col-md-12 col-sm-12'> 
            <StudentTable
              students={students}
              setStudents={setStudents}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
