// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Input, Select, Button, FormContainer } from './style';
import { useNavigate } from "react-router-dom";

export function FormRegister() {
    const navigate = useNavigate();
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [tipo, setTipo] = useState('1'); 
    const [returnMsg, setMsg] = useState('');

    const MakeJsonUserAdd = () => {
        return {
            Name: nome,
            Email: email,
            Matricula: tipo === '2' ? matricula : '',
            Password: senha,
            TypeUser: tipo
        };
    };

    const HandleRegistro = () => {
        const userAdd = MakeJsonUserAdd();
        
        if (senha !== confirmarSenha) {
            setMsg('Senhas divergentes. Por favor, verifique e confirme a senha');
            document.getElementById('alert-erro').classList.remove('hide');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userAdd);
        localStorage.setItem('users', JSON.stringify(users));
        
        setMsg('');
        document.getElementById('alert-erro').classList.add('hide');

        navigate("/");
    };

    return (
        <FormContainer>
            <div id="alert-erro" className="alert alert-danger hide" role="alert">{returnMsg}</div>

            <Input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
            <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            {tipo === '2' && <Input placeholder="Matrícula" value={matricula} onChange={e => setMatricula(e.target.value)} />}
            <Input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
            <Input placeholder="Confirme a senha" type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} />
            <Select value={tipo} onChange={e => setTipo(e.target.value)}>
                <option value="1">Responsável</option>
                <option value="2">Educador</option>
            </Select>
            <Button type="button" onClick={HandleRegistro}>Registrar</Button>
        </FormContainer>
    );
}

export default FormRegister;
