/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from '../../components/form-register/index';
import { LoginBox, FormBox, ContainerLeft, LogoContainer } from './style';
import { Logo } from '../../components/logo/index';

const Register = () => {
    return (
        <LoginBox>
            <ContainerLeft>
                <Logo/>
                <h1>Cadastre-se</h1>
                <p>Cyberbullying!</p>
                <p>É hora de você deletar sua ignorância.</p>
                <p>Bullying on-line. Resultado off-line.</p>
            </ContainerLeft>

            <LogoContainer>
                <Logo />
            </LogoContainer>

            <FormBox>
                <Form/>
            </FormBox>
        </LoginBox>
    );
};

export default Register;
