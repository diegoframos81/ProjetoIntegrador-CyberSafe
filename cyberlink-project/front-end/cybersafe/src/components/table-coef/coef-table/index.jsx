/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CoefModal from '../coef-modal/index';
import CardCoeficiente from '../../card-coef/index';
import styled from 'styled-components';

// eslint-disable-next-line react-refresh/only-export-components
const ContentCard = styled.div`
  position: relative;
  top: 15rem;
`

const Styles = styled.div`
  padding: 1rem;
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const CoefTable = () => {
  const location = useLocation();
  const { id } = useParams();
  const [nome, setNome ] = useState('')
  const [data, setData] = useState([
    { disciplina: 'Compiladores', participacao: 5, frequencia: 5 }, 
    { disciplina: 'Projeto Integrador', participacao: 4, frequencia: 5 },
    { disciplina: 'Sistemas Multimídia', participacao: 3, frequencia: 4 },
    { disciplina: 'Inteligência Artificial', participacao: 5, frequencia: 4 },
    { disciplina: 'Desenvolvimento Mobile', participacao: 2, frequencia: 3 },
  ]);

  const [participacaoMedia, setParticipacaoMedia] = useState(0);
  const [frequenciaMedia, setFrequenciaMedia] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({
    disciplina: 'Compiladores',
    participacao: 1,
    frequencia: 1,
  });

  useEffect(() => {
    const participacaoTotal = data.reduce((acc, item) => acc + item.participacao, 0);
    const frequenciaTotal = data.reduce((acc, item) => acc + item.frequencia, 0);
    const participacaoMedia = participacaoTotal / data.length;
    const frequenciaMedia = frequenciaTotal / data.length;
    setParticipacaoMedia(participacaoMedia);
    setFrequenciaMedia(frequenciaMedia);
    setNome(localStorage.getItem('nomeAluno'))
  }, [data]);

  const handleChange = (e) => {
    setSelectedStudent({
      ...selectedStudent,
      [e.target.nome]: e.target.value,
    });
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.disciplina === selectedStudent.disciplina
          ? {
              ...item,
              participacao: parseInt(selectedStudent.participacao, 10),
              frequencia: parseInt(selectedStudent.frequencia, 10),
            }
          : item
      )
    );
    setModalShow(false);
  };

  return (
    <Styles>
      <h2>Aluno: {nome}</h2>
      <table>
        <thead>
          <tr>
            <th>DISCIPLINAS</th>
            <th>PARTICIPAÇÃO</th>
            <th>FREQUÊNCIA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.disciplina}</td>
              <td>{item.participacao}</td>
              <td>{item.frequencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="primary" onClick={() => setModalShow(true)} style={{ marginTop: '20px' }}>
        Adicionar Informação
      </Button>
      <CoefModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        handleSave={handleSave}
        student={selectedStudent}
        handleChange={handleChange}
      />
      <ContentCard>
        <CardCoeficiente participacao={participacaoMedia} frequencia={frequenciaMedia} />
      </ContentCard>
    </Styles>
  );
};

export default CoefTable;