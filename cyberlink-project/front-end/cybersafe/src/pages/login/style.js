import styled from "styled-components";

export const LoginBox = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 12%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5%;
    box-shadow: none;
  }
`;  

export const FormBox = styled.div`
  padding: 3.5rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ForgotPassword = styled.a`
  font-size: 0.8em;
  color: #1890ff;
  text-decoration: underline;

  &:hover {
    color: #007bc0;
  }
`;

export const ContainerLeft = styled.div`
  padding: 2rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex: 1;

  p {
    font-size: 12px;
    color: #004267;
  }

  h1 {
    color: #007bc0;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: none;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;
