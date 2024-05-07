import LogoIcon from '../../assets/Logo/LogoCyberSafe-removebg-preview.png'
import Sino from '../../assets/Image/Sino Notificação.svg'
import Email from '../../assets/Image/Email.svg'
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  background-color: #637B90;
  padding-bottom: 0.3rem;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const NavbarBrand = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -8rem;
    width: 30%;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;

    img {
        width: 10%;
    }

    
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #fff;
  margin-left: -8rem;
`;

const DirNavBar = styled.div`
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 30%;
    margin-left: 43rem;
`

const NavbarLink = styled.a`
  color: #fff;
  justify-content: space-evenly ;
  text-decoration: none;
  margin-left: 5rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBrand href="#"><img src={LogoIcon} alt="logo" /><a>LRWD Soluções</a></NavbarBrand>
      <Logo>CYBERSAFE</Logo>

      <DirNavBar>
        <NavbarLink href="#">HOME</NavbarLink>
        <NavbarLink href="#">FREQUENCIA </NavbarLink>
        <NavbarLink href="#">SOBRE </NavbarLink>
        <NavbarLink href="#"><img src={Sino} alt="logo" /> </NavbarLink>
        <NavbarLink href="#"><img src={Email} alt="logo" /> </NavbarLink>
      </DirNavBar>
    </NavbarContainer>
  );
};

export default Navbar;