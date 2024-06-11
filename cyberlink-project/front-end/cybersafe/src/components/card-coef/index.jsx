/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BotaoAvaliacao = styled.section`
  width: 15rem;
  background-color: #c7e4ff; // Fundo azul claro
  color: #1e1e1e; // Texto preto
  border-color: #c7e4ff;
  border-radius: 10px;
  padding: 20px;
  font-size: 15px;
  font-weight: bold;
`;

const CardCoeficiente = ({ participacao = 'N/A', frequencia = 'N/A' }) => {
  console.log(`Props - Participacao: ${participacao}, Frequencia: ${frequencia}`);
  return (
    <div>
      <BotaoAvaliacao className='margin-bottom-15'>
        Participação: {participacao}
      </BotaoAvaliacao>
      <BotaoAvaliacao>
        Frequência: {frequencia}
      </BotaoAvaliacao>
    </div>
  );
};

export default CardCoeficiente;
