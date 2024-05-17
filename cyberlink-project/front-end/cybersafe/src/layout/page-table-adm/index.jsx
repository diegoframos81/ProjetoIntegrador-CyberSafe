
import CardContainer from '../../components/card-disciplinas/card-container';
import Navbar from './../../components/navbar/index';
import DataTable from './../../components/table-adm/index';
import styled from "styled-components";

const ContentCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

function LayoutTable() {
  return (
    <>
        <Navbar />
        <ContentCard>
          <CardContainer>
            <DataTable />
          </CardContainer>
        </ContentCard>
    </>
  )
}

export default LayoutTable
