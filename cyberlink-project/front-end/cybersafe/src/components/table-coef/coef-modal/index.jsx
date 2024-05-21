/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CoefModal = ({ show, handleClose, handleSave, student, handleChange }) => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Informação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDisciplina">
              <Form.Label>Disciplina</Form.Label>
              <Form.Control
                as="select"
                name="disciplina"
                value={student.disciplina}
                onChange={handleChange}
              >
                <option value="Compiladores">Compiladores</option>
                <option value="Projeto Integrador">Projeto Integrador</option>
                <option value="Sistemas Multimidias">Sistemas Multimidias</option>
                <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                <option value="Desenvolvimento Mobile">Desenvolvimento Mobile</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formParticipacao">
              <Form.Label>Participação</Form.Label>
              <Form.Control
                as="select"
                name="participacao"
                value={student.participacao}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formFrequencia">
              <Form.Label>Frequência</Form.Label>
              <Form.Control
                as="select"
                name="frequencia"
                value={student.frequencia}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
export default CoefModal;
