import Navbar from "../../components/navbar"

import CardContainer from '../../components/card-disciplinas/card-container/index';

import { ContainerDetails } from '../page-details/style';

import GraficoFaltas from "../../components/gráfico-notas/grafico-faltas/data";

export const FaltaPage = () => {
  return (
    <>
      <Navbar />
      <ContainerDetails>
        <CardContainer>
            <h1>DISCIPLINAS:</h1>
          <GraficoFaltas />
            <h2>Número de faltas</h2>
        </CardContainer>
      </ContainerDetails>
    </>
  )
}
