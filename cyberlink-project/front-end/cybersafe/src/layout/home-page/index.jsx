/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/index';
import CardContainer from '../../components/card-disciplinas/card-container/index';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContentInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
`;

const ProfessorInfo = styled.p`
    margin: 0;
    font-size: 16px;
    color: #717171;
`;

const HorarioInfo = styled.p`
    color: #717171;
    margin: 0;
    font-size: 16px;
`;

const Discipline = styled.h2`
  margin: 10px 0;
  font-size: 20px;
`;

const CustomPageLayout = styled.div`
  width: 50%;
  padding: 30px;
  margin-top: 5%;
  background-color: #ffffff; // Cor de exemplo
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
  padding: 20px;

  @media (max-width: 1300px) {
    width: 90%;
  }

 
`;

const CustomCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 15px;
  padding: 20px;
  background-color: #C7E4FF; // Cor de exemplo
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ButtonDetails = styled.button`
  align-self: flex-end;
  padding: 10px 20px;
  background-color: #7895CB; // Cor de exemplo
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #57709F;
  }
`;
function HomeLayout() {
  const navigate = useNavigate();

  const scheduleInfo = [
      { professor: "João Silva", horario: "18:30", disciplina: "Projeto Integrador" },
      { professor: "João Silva", horario: "18:30", disciplina: "Sistemas Multimídia" },
      { professor: "João Silva", horario: "18:30", disciplina: "Compiladores" },
      { professor: "João Silva", horario: "18:30", disciplina: "Desenvolvimento Mobile" },
      { professor: "João Silva", horario: "18:30", disciplina: "Inteligência Artificial" },
  ];

  return (
    <>
      <Navbar />
      <CustomPageLayout className="container">
        <CustomCardContainer>
          {scheduleInfo.map((info, index) => (
            <Card key={index}>
              <ContentInfo>
                <ProfessorInfo>Professor: {info.professor}</ProfessorInfo>
                <HorarioInfo>Horário: {info.horario}</HorarioInfo>
              </ContentInfo>
              <Discipline>Disciplina: {info.disciplina}</Discipline>
              <ButtonDetails onClick={() => navigate("/details")}>Ver detalhes</ButtonDetails>
            </Card>
          ))}
        </CustomCardContainer>
      </CustomPageLayout>
    </>
  );
}

export default HomeLayout;
