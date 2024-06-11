/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import CardCoeficiente from '../../card-coef/index';

const CoefTable = () => {
  const location = useLocation();
  const { id } = useParams();
  const [nome, setNome] = useState('');
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
    setNome(localStorage.getItem('nomeAluno'));
  }, [data]);

  const handleChange = (e) => {
    setSelectedStudent({
      ...selectedStudent,
      [e.target.name]: e.target.value,
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
    <div className="container mt-4">
      <h2>Aluno: {nome}</h2>
      <div className="table-responsive">
        <Table striped bordered hover>
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
        </Table>
      </div>
      <Button variant="primary margin-bottom-15" onClick={() => setModalShow(true)} className="mt-3">
        Adicionar Informação
      </Button>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Informações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDisciplina">
              <Form.Label>Disciplina</Form.Label>
              <Form.Control
                type="text"
                name="disciplina"
                value={selectedStudent.disciplina}
                onChange={handleChange}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formParticipacao">
              <Form.Label>Participação</Form.Label>
              <Form.Control
                type="number"
                name="participacao"
                value={selectedStudent.participacao}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFrequencia">
              <Form.Label>Frequência</Form.Label>
              <Form.Control
                type="number"
                name="frequencia"
                value={selectedStudent.frequencia}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar alterações
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <CardCoeficiente participacao={participacaoMedia} frequencia={frequenciaMedia} />
      </div>
    </div>
  );
};

export default CoefTable;
