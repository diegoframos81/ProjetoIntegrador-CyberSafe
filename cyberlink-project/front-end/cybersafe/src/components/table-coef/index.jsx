/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CoefTable from './coef-table/index';
import CoefModal from './coef-modal/index';

const PageWrapper = styled.div`
  padding: 20px;
`;

const initialStudent = { disciplina: 'Compiladores', participacao: '1', frequencia: '1' };

const DataTableCoef = () => {
  const [students, setStudents] = useState([
    { disciplina: 'Compiladores', participacao: 5, frequencia: 5 },
    { disciplina: 'Projeto Integrador', participacao: 4, frequencia: 5 },
    { disciplina: 'Sistemas Multimidias', participacao: 3, frequencia: 4 },
    { disciplina: 'Inteligencia Artificial', participacao: 5, frequencia: 4 },
    { disciplina: 'Desenvolvimento Mobile', participacao: 2, frequencia: 3 },
  ]);
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState(initialStudent);

  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSave = () => {
    setStudents((prevStudents) =>
      prevStudents.map((item) =>
        item.disciplina === student.disciplina
          ? {
              ...item,
              participacao: parseInt(student.participacao, 10),
              frequencia: parseInt(student.frequencia, 10),
            }
          : item
      )
    );
    setStudent(initialStudent);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const calculateAverage = (key) => {
    const total = students.reduce((acc, item) => acc + item[key], 0);
    return Math.round(total / students.length);
  };

  const navigateToCardPage = () => {
    const participacao = calculateAverage('participacao');
    const frequencia = calculateAverage('frequencia');
    navigate('/details', { state: { participacao, frequencia } });
  };

  return (
    <PageWrapper>
      <CoefTable data={students} onAdd={handleShow} />
      <CoefModal
        show={show}
        handleClose={handleClose}
        handleSave={handleSave}
        student={student}
        handleChange={handleChange}
      />
      
    </PageWrapper>
  );
};

export default DataTableCoef;
