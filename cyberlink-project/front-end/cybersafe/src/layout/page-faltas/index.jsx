import Navbar from "../../components/navbar"
import styled from 'styled-components';
import CardContainer from '../../components/card-disciplinas/card-container/index';
import { ContainerDetails } from '../page-details/style';
import GraficoFaltas from "../../components/gráfico-notas/grafico-faltas/data";


const TitleDisc = styled.h1`
  margin-left: 27rem;
  font-size: 24px;
  color: #000;
  
`;
const LegendDisc = styled.h2`
  font-size: 24px;
  color: #000;
  margin-left: 26rem;
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
