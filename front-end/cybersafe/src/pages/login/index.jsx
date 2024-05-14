import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from '../../components/form-login/button/index';
import { LoginBox, FormBox, ForgotPassword, ContainerLeft} from './style';
import { Logo } from '../../components/logo/index';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleLogin = () => {
        axios.get('http://localhost:8080/Login', {
            params: {
                email: email,
                password: password
            }
        }).then(response => {
            $('#alert-success').removeClass('hide');
            $('#alert-erro').addClass('hide');
            navigate("/Home");
        }).catch(error => {
            $('#alert-erro').removeClass('hide');
            $('#alert-success').addClass('hide');
        });
    };

    return (
        <LoginBox>
            <ContainerLeft>
                <Logo/>
                <h1>Fazer Login</h1>
                <p> Cyberbullying! </p>
                <p> É hora de você deletar sua ignorância.</p>
                <p> Bullying on-line. Resultado off-line.</p>
            </ContainerLeft>

            <FormBox>
                <div id="alert-erro" className="alert alert-danger hide" role="alert">Email ou senha incorretos !</div>
                <div id="alert-success" className="alert alert-success hide" role="alert">Deu bom !</div>

                <input type="email" className="input-forms" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" className="input-forms"  placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />

                <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
                <Button type="login" text="Acessar conta" onClick={handleLogin} />
                <Button text="Criar Conta" onClick={() => navigate("/Register")} type="create" />
            </FormBox>
        </LoginBox>
    );
};

export default Login;

