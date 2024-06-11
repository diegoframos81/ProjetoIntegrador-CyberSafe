/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import styled from 'styled-components';
import LogoIcon from '../../assets/Logo/LogoCyberSafe-removebg-preview.png';
import Sino from '../../assets/Image/Sino Notificação.svg';
import Email from '../../assets/Image/Email.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarContainer = styled.nav`
  background-color: #637B90;
  padding-bottom: 0.3rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #fff; 
    text-decoration: none; 
    cursor: pointer;  
  }
`;

const ContainerFluid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: 1rem; /* Add padding for mobile devices */
  }
`;

const NavbarBrand = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #fff; 
    text-decoration: none; 
    cursor: pointer;  
  }

  img {
    width: 40px;
  }

  @media (max-width: 768px) {
    img {
      margin-left: 1rem; /* Increase margin for mobile devices */
    }
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #fff;
`;

const DirNavBar = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmRoute = location.pathname === '/homeAdm' || matchPath("/tableCoef/:id", location.pathname);

  return (
    <NavbarContainer className="navbar navbar-expand-lg">
      <ContainerFluid className="container-fluid">
        <NavbarBrand href="" onClick={() => navigate(isAdmRoute ? "/homeAdm" : "/home")} className="navbar-brand">
          <img src={LogoIcon} alt="logo" />
          <a>LRWD Soluções</a>
        </NavbarBrand>
        <Logo className="d-none d-lg-block">CYBERSAFE</Logo>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <DirNavBar className="navbar-nav ms-auto">
            <NavbarLink href="" onClick={() => navigate(isAdmRoute ? "/homeAdm" : "/home")} className="nav-link">HOME</NavbarLink>
            <NavbarLink href="" onClick={() => navigate(isAdmRoute ? "/tableCoef/:id" : "/frequencia")} className="nav-link">
              {isAdmRoute ? "COEFICIENTE" : "FREQUÊNCIA"}
            </NavbarLink>
            <NavbarLink href="" className="nav-link">SOBRE</NavbarLink>
            {!isAdmRoute && <NavbarLink href="" className="nav-link"><img src={Sino} alt="notification" /></NavbarLink>}
            {!isAdmRoute && <NavbarLink href="" className="nav-link"><img src={Email} alt="email" /></NavbarLink>}
          </DirNavBar>
        </div>
      </ContainerFluid>
    </NavbarContainer>
  );
}

export default Navbar;