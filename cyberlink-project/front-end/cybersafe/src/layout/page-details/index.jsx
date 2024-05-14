import Navbar from "../../components/navbar"
import ChartComponent from '../../components/gráfico-notas/gráfico-notas/index';
import CardContainer from '../../components/card-disciplinas/card-container/index';
import CardNotas from '../../components/card-notas/index';

import { ContainerDetails } from '../page-details/style';
import CardCoeficiente from "../../components/card-coef";

export const DetailsPage = () => {
  return (
    <>
      <Navbar />
      <ContainerDetails>
        <CardContainer>
          <ChartComponent />
          <CardNotas />
          <CardCoeficiente />
        </CardContainer>
      </ContainerDetails>
    </>
  )
}
