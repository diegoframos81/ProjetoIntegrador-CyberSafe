/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import StudentModal from './modal-student/index';
import StudentTable from './table-student/index';

function DataTable() {
  const [show, setShow] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ nome: '', idade: '', matricula: '', curso: '', responsavel: '' });
  const [multiAdd, setMultiAdd] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleClose = () => {
    setShow(false);
    setEditIndex(null);
  };
  const handleShow = () => setShow(true);

  const handleSave = () => {
    if (editIndex !== null) {
      const newStudents = [...students];
      newStudents[editIndex] = student;
      setStudents(newStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, student]);
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
      <Button variant="primary" onClick={handleShow}>
        + Alunos
      </Button>

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
