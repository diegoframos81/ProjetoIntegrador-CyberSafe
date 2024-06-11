import styled from 'styled-components';
import CardContainer from '../../components/card-disciplinas/card-container/index';

export const ContainerDetails = styled.div`
  padding: 20px;
`;

export const StyledCardContainer = styled(CardContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

