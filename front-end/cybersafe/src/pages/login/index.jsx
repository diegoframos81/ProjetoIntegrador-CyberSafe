import { useNavigate } from "react-router-dom";
import Input from '../../components/form-login/inputs/index';
import Button from '../../components/form-login/button/index';
import { LoginBox, FormBox, ForgotPassword, ContainerLeft} from './style';
import { Logo } from '../../components/logo/index';




const Login = () => {
    const navigate = useNavigate();
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
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
            <Button text="Acessar conta" onClick={() => { {navigate("/")} }} type="login" />
            <Button text="Criar Conta" onClick={() => { {navigate("/Register")} }} type="create" />
        </FormBox>
        </LoginBox>
    );
};

export default Login;
