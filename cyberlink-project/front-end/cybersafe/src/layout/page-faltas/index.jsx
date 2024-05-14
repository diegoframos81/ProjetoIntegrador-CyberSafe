import Navbar from "../../components/navbar"
import CardContainer from '../../components/card-disciplinas/card-container/index';
import { ContainerDetails } from '../page-details/style';
import GraficoFaltas from "../../components/gráfico-notas/grafico-faltas/data";
import styled from "styled-components";

const TitleDisc = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const LegendDisc = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const FaltaPage = () => {
  return (
    <>
      <Navbar />
      <ContainerDetails>
        <CardContainer>
            <TitleDisc><h1>DISCIPLINAS</h1></TitleDisc>
          <GraficoFaltas />
            <LegendDisc><h2>Número de faltas</h2></LegendDisc>
        </CardContainer>
      </ContainerDetails>
    </>
  )
}
