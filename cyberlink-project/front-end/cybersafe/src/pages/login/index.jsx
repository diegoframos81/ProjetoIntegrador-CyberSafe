/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from '../../components/form-login/button/index.jsx';
import { LoginBox, FormBox, ForgotPassword, ContainerLeft } from './style';
import { Logo } from '../../components/logo/index.jsx';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Iniciando o processo de login...");
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.Email === email && u.Password === password);

        if (user) {
            console.log("Usuário encontrado:", user);
            document.getElementById('alert-success').classList.remove('hide');
            document.getElementById('alert-erro').classList.add('hide');

            console.log(`User type: ${user.TypeUser}`); // Adicionando logs para depuração

            // Save logged-in user info in sessionStorage
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));

            if (user.TypeUser === '1') {
                console.log('Navigating to /home'); // Adicionando logs para depuração
                navigate("/home");
            } else if (user.TypeUser === '2') {
                console.log('Navigating to /homeAdm'); // Adicionando logs para depuração
                navigate("/homeAdm");
            }
        } else {
            console.log("Usuário não encontrado.");
            document.getElementById('alert-erro').classList.remove('hide');
            document.getElementById('alert-success').classList.add('hide');
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
                <Button text="Criar Conta" onClick={() => navigate("/register")} type="create" />
            </FormBox>
        </LoginBox>
    );
};

export default Login;
