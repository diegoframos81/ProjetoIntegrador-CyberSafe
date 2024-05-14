import styled from 'styled-components';
import Navbar from '../../components/navbar/index';
import { useNavigate } from "react-router-dom";
import PageLayout from './style';
import CardContainer from '../../components/card-disciplinas/card-container/index';
import Card from '../../components/card-disciplinas/card/index';
import Button from '../../components/card-disciplinas/button/index';


function HomeLayout() {

const navigate = useNavigate();

const ContentInfo = styled.div`
    display: flex;
    flex-direction: row;
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
    padding-left: 30px;
`;

const Discipline = styled.h2`
  margin: 10px 0;
  font-size: 20px;
`;
  
  // Objeto de exemplo com informações do professor
  const scheduleInfo = [
      { professor: "João Silva", horario: "18:30", disciplina:"Projeto Integrador" },
      { professor: "João Silva", horario:"18:30", disciplina:"Sistemas Multimídia" },
      { professor: "João Silva", horario:"18:30", disciplina:"Compiladores" },
      { professor: "João Silva", horario:"18:30", disciplina:"Desenvolvimento Mobile" },
      { professor: "João Silva", horario:"18:30", disciplina:"Inteligencia Artificial" },
      // Adicione mais entradas conforme necessário
  ];
  
  
   return (
    <>
        <Navbar/>
            <PageLayout>
                <CardContainer>
                {scheduleInfo.map((info, index) => (
                    <Card key={index}>
                    <ContentInfo>
                        <ProfessorInfo>Professor: {info.professor}</ProfessorInfo>
                        <HorarioInfo>Horário da Aula: {info.horario}</HorarioInfo>
                    </ContentInfo>
                    <Discipline>Disciplina: {info.disciplina}</Discipline>
                    <Button onClick={() => navigate("/details")}>Ver detalhes</Button>
                    </Card>
                ))}
                </CardContainer>
   </PageLayout>
   </>
 );
}

export default HomeLayout;
