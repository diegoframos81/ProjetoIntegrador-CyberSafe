/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importando a imagem diretamente
import psicologoImage from '../../assets/Image/Psicologo.png';

// Dados dos profissionais
const professionals = [
  {
    name: 'Dr. João Silva',
    specialties: 'Acompanhamento psicológico',
    contact: 'mailto:joao.silva@example.com',
  },
  {
    name: 'Dra. Maria Oliveira',
    specialties: 'Acompanhamento terapêutico',
    contact: 'mailto:maria.oliveira@example.com',
  },
  {
    name: 'Dr. Carlos Souza',
    specialties: 'Acompanhamento terapêutico',
    contact: 'mailto:carlos.souza@example.com',
  },
  {
    name: 'Dra. Ana Pereira',
    specialties: 'Acompanhamento psicológico',
    contact: 'mailto:ana.pereira@example.com',
  },
  {
    name: 'Dr. Pedro Lima',
    specialties: 'Acompanhamento psicológico',
    contact: 'mailto:pedro.lima@example.com',
  },
  {
    name: 'Dra. Fernanda Costa',
    specialties: 'Acompanhamento psicológico',
    contact: 'mailto:fernanda.costa@example.com',
  },
  {
    name: 'Dr. Roberto Martins',
    specialties: 'Acompanhamento psicológico',
    contact: 'mailto:roberto.martins@example.com',
  },
  {
    name: 'Dra. Laura Ferreira',
    specialties: 'Acompanhamento psicológico',
    contact: 'mailto:laura.ferreira@example.com',
  },
];

function ProfessionalCard({ professional }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={psicologoImage} />
        <Card.Body>
          <Card.Title>{professional.name}</Card.Title>
          <Card.Text>{professional.specialties}</Card.Text>
          <Button variant="primary" href={professional.contact}>
            Contactar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function ProfessionalList() {
  return (
    <Container>
      <Row>
        {professionals.map((professional, index) => (
          <ProfessionalCard key={index} professional={professional} />
        ))}
      </Row>
    </Container>
  );
}

export default ProfessionalList;
