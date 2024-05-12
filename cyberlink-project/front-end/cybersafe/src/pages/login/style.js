import styled from "styled-components";

export const LoginBox = styled.div`
  width: 680px;
  height: 320px;

  margin: 0 auto;
  margin-top: 180px;
  margin-left: auto;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const FormBox = styled.div`
  width: 35%;
  margin-top: -230px;
  margin-left: 25rem;
`;

export const ForgotPassword = styled.a`
  text-align: right;
  font-size: 0.8em;
  color: #1890ff;
  text-decoration: underline;

  &:hover {
    color: #007bc0;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-left: 40px;
  p {
    font-size: 12px;
    color: #004267;
    text-align: left !important;
  }

  h1 {
    color: #007bc0;
    margin-left: -30px;
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: -3px;
  }
`;
