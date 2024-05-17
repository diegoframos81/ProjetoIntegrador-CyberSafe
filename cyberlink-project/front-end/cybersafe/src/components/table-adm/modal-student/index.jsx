/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';

function StudentModal({ show, handleClose, handleSave, student, setStudent, multiAdd, setMultiAdd }) {
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Aluno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" name="nome" value={student.nome} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formNome">
            <Form.Label>Idade</Form.Label>
            <Form.Control type="text" placeholder="Idade" name="idade" value={student.idade} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formNome">
            <Form.Label>Matrícula</Form.Label>
            <Form.Control type="text" placeholder="Matricula" name="matricula" value={student.matricula} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formNome">
            <Form.Label>Curso</Form.Label>
            <Form.Control type="text" placeholder="Curso" name="curso" value={student.curso} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formNome">
            <Form.Label>Responsável</Form.Label>
            <Form.Control type="text" placeholder="Responsável" name="responsavel" value={student.responsavel} onChange={handleChange} />
          </Form.Group>

          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={multiAdd} onChange={() => setMultiAdd(!multiAdd)} />
            <FormControl aria-label="Text input with checkbox" placeholder="Adicionar mais de um aluno" readOnly />
          </InputGroup>
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
}

export default StudentModal;
