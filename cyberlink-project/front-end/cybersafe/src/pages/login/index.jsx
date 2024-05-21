/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from '../../components/form-login/button/index';
import { LoginBox, FormBox, ForgotPassword, ContainerLeft } from './style';
import { Logo } from '../../components/logo/index';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.Email === email && u.Password === password);

        if (user) {
            $('#alert-success').removeClass('hide');
            $('#alert-erro').addClass('hide');
            
            console.log(`User type: ${user.TypeUser}`); // Adicionando logs para depuração

            if (user.TypeUser === '1') {
                console.log('Navigating to /Home'); // Adicionando logs para depuração
                navigate("/Home");
            } else if (user.TypeUser === '2') {
                console.log('Navigating to /HomeAdm'); // Adicionando logs para depuração
                navigate("/HomeAdm");
            }
        } else {
            $('#alert-erro').removeClass('hide');
            $('#alert-success').addClass('hide');
        }
    };

    return (
        <LoginBox>
            <ContainerLeft>
                <Logo />
                <h1>Fazer Login</h1>
                <p> Cyberbullying! </p>
                <p> É hora de você deletar sua ignorância.</p>
                <p> Bullying on-line. Resultado off-line.</p>
            </ContainerLeft>

            <FormBox>
                <div id="alert-erro" className="alert alert-danger hide" role="alert">Email ou senha incorretos !</div>
                <div id="alert-success" className="alert alert-success hide" role="alert">Deu bom !</div>

                <input type="email" className="input-forms" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" className="input-forms" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />

                <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
                <Button type="login" text="Acessar conta" onClick={handleLogin} />
                <Button text="Criar Conta" onClick={() => navigate("/Register")} type="create" />
            </FormBox>
        </LoginBox>
    );
};

export default Login;
