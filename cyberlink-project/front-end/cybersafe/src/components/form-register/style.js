import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

export const LoginBox = styled.div`
    width: 680px;
    height: auto;
    margin: 0 auto;
    margin-top: 180px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    @media (max-width: 768px) {
        width: 90%;
        margin-top: 100px;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        width: 95%;
        margin-top: 80px;
    }
`;

export const FormBox = styled.div`
    width: 50%;
    padding: 3.5rem;

    @media (max-width: 768px) {
        width: 90%;
        padding: 1rem;
    }

    @media (max-width: 480px) {
        width: 95%;
    }
`;

export const ContainerLeft = styled.div`
    width: 50%;
    padding: 2rem;

    p {
        font-size: 12px;
        color: #004267;
        text-align: left !important;  
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

export const FormContainer = styled.form`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    background-color: #596063;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #404040;
    }
`;
