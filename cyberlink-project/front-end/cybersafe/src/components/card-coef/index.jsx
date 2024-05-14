
import styled from 'styled-components';

const BotaoAvaliacao = styled.section`
  position: relative;
  top: -10rem;
  left: 47.3rem;
  width: 10rem;
  background-color: #C7E4FF; // Fundo azul claro
  color: #1E1E1E; // Texto preto
  border-color: #C7E4FF;
  border-radius: 10px;
  padding: 20px 50px; // Espaçamento interno
  font-size: 15px; // Tamanho da fonte
  font-weight: bold;
  
`;

const CardCoeficiente = () => {
  return (
    <BotaoAvaliacao>
      4 - Bom
    </BotaoAvaliacao>
  );
}

export default CardCoeficiente;
