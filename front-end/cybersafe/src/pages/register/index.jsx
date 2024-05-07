
import { Form } from '../../components/form-register/index';
import { LoginBox, FormBox, ContainerLeft} from './style';
import { Logo } from '../../components/logo/index';




const Register = () => {
    
    return (
        <LoginBox>
        <ContainerLeft>
            <Logo/>
            <h1>Cadastre-se</h1>
            <p> Cyberbullying! </p>
            <p> É hora de você deletar sua ignorância.</p>
            <p> Bullying on-line. Resultado off-line.</p>
        </ContainerLeft>

        <FormBox>
            <Form/>
        </FormBox>
        </LoginBox>
    );
};

export default Register;
