/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BotaoAvaliacao = styled.section`
  position: relative;
  top: -200px;
  width: 15rem;
  background-color: #c7e4ff; // Fundo azul claro
  color: #1e1e1e; // Texto preto
  border-color: #c7e4ff;
  border-radius: 10px;
  padding: 20px 50px; // Espaçamento interno
  font-size: 15px; // Tamanho da fonte
  font-weight: bold;
  margin: 10px;
`;

const CardCoeficiente = ({ participacao = 'N/A', frequencia = 'N/A' }) => {
  console.log(`Props - Participacao: ${participacao}, Frequencia: ${frequencia}`); // Debugging log
  return (
    <div>
      <BotaoAvaliacao>
        Participação: {participacao}
      </BotaoAvaliacao>
      <BotaoAvaliacao>
        Frequência: {frequencia}
      </BotaoAvaliacao>
    </div>
  );
};

export default CardCoeficiente;
