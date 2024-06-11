
import CardContainer from '../../components/card-disciplinas/card-container';
import Navbar from './../../components/navbar/index';
import DataTable from './../../components/table-adm/index';
import styled from "styled-components";

const ContentCard = styled.div`
`;

function LayoutTable() {
  return (
    <>
        <Navbar />
        <ContentCard>
          <div className='container'> 
            <div className='row align-items-center'>
              <div className='col-lg-12'>
                <CardContainer>
                  <DataTable />
                </CardContainer>
              </div>
            </div>
          </div>
        </ContentCard>
    </>
  )
}

export default LayoutTable
