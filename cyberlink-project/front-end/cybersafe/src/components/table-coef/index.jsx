/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CoefTable from './coef-table/index';
import CoefModal from './coef-modal/index';

const PageWrapper = styled.div`
  padding: 20px;
`;

const DataTableCoef = () => {
  const { id } = useParams(); // pegar o id da URL
  const [students, setStudents] = useState([]);
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Carregar dados do estudante com base no ID da URL
    axios.get(`http://77.37.69.162:5173/students/${id}`)
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }, [id]);

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
    setStudent(null);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  if (!student) {
    return <div>Loading...</div>; // ou qualquer outro carregamento enquanto os dados estão sendo buscados
  }

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
