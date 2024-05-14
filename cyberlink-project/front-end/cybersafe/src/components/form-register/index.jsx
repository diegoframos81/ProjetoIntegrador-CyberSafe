import React, { useState } from 'react';
import { Input, Select, Button, FormContainer } from './style';
import { useNavigate } from "react-router-dom";

export function Form() {

    const navigate = useNavigate();
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [tipo, setTipo] = useState(''); 
    const [returnMsg, setMsg] = useState('');

    const MakeJsonUserAdd = () => {

        const userAdd = {
            Name: nome,
            Email: email,
            Password: senha,
            TypeUser: tipo,
            confirmePassword: confirmarSenha,
        };

        return userAdd;
    };

    const HandleRegistro  = () => {
        var userAdd = MakeJsonUserAdd();
        if(userAdd.Password != userAdd.confirmePassword){
            setMsg('Senhas divergentes. Por favor, verifique confirme a senha');
            $('#alert-erro').removeClass('hide');
        }else{
            axios.post('http://localhost:8080/InsertNewUser', userAdd).then(response => {
                navigate("/");
                $('#alert-erro').addClass('hide');
            }).catch(error => { 
                setMsg('Houve um erro ao cadastrar o usuário');
                $('#alert-erro').removeClass('hide');
            });
        }
    };

    return (
        <FormContainer>
            <div id="alert-erro" style={{ width: "100%", height: "70px" }} className="alert alert-danger hide" role="alert">{returnMsg}</div>

            <Input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
            <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
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
