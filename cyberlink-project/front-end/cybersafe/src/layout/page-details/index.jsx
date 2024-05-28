/* eslint-disable no-unused-vars */


import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar";
import ChartComponent from '../../components/gráfico-notas/gráfico/index';
import CardContainer from '../../components/card-disciplinas/card-container/index';
import CardNotas from '../../components/card-notas/index';
import CardCoeficiente from "../../components/card-coef";
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerDetails } from './style'


const StyledCardContainer = styled(CardContainer)`
  height: 60vh; // Define a altura desejada em 80% da altura da tela
`;

const DetailsPage = () => {
  const location = useLocation();
  const { state } = location || {};
  const { data } = state || {};

  const [participacaoMedia, setParticipacaoMedia] = useState(0);
  const [frequenciaMedia, setFrequenciaMedia] = useState(0);

  useEffect(() => {
    if (data) {
      const participacaoTotal = data.reduce((acc, item) => acc + item.participacao, 0);
      const frequenciaTotal = data.reduce((acc, item) => acc + item.frequencia, 0);
      const participacaoMedia = participacaoTotal / data.length;
      const frequenciaMedia = frequenciaTotal / data.length;
      setParticipacaoMedia(participacaoMedia);
      setFrequenciaMedia(frequenciaMedia);
    }
  }, [data]);

  return (
    <>
      <Navbar />
      <ContainerDetails>
      <StyledCardContainer>
        <ChartComponent />
        <CardNotas />
        <CardCoeficiente participacao={participacaoMedia} frequencia={frequenciaMedia} />
      </StyledCardContainer >
      </ContainerDetails>
    </>
  )
}

export default DetailsPage;
