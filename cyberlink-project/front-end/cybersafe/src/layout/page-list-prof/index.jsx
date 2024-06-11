import Navbar from './../../components/navbar/index';
import ProfessionalList from '../../components/list-prof/index'
import styled from "styled-components";

const ContentCardProf = styled.div`
    
    margin-top: 10%;

`;
function ListProf() {
  return (
    <>
        <Navbar />
        <ContentCardProf>
            <ProfessionalList />
        </ContentCardProf>
    </>
  )
}

export default ListProf
