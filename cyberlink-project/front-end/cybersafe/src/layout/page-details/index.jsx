/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../../components/navbar";
import ChartComponent from '../../components/gráfico-notas/gráfico/index';

import CardNotas from '../../components/card-notas/index';
import CardCoeficiente from "../../components/card-coef";
import { ContainerDetails, StyledCardContainer } from './style';

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
        </StyledCardContainer>
      </ContainerDetails>
    </>
  );
};

export default DetailsPage;
