
import styled from 'styled-components';

export const FormContainer = styled.form`
    max-width: 500px;
    margin: 0 auto;
    margin-top: -17rem;
    border-radius: 10px;
    
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
