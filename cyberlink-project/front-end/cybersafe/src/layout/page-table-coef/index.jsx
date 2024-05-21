import Navbar from './../../components/navbar/index';
import DataTableCoef from '../../components/table-coef/index';
import CardContainer from '../../components/card-disciplinas/card-container';
import styled from "styled-components";

const ContentCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

function LayoutTableCoef() {
  return (
    <>
        <Navbar />
        <ContentCard>
          <CardContainer>
            <DataTableCoef />
          </CardContainer>
        </ContentCard>
    </>
  )
}

export default LayoutTableCoef
