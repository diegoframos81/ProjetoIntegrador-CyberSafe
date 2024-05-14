
import { Input, Select, Button, FormContainer, } from './style';
import { useNavigate } from "react-router-dom";


export function Form() {
    const navigate = useNavigate();
    return (
        <FormContainer>

            <div id="alert-erro" style={{ width: "100%", height: "70px" }} className="alert alert-danger hide" role="alert">{returnMsg}</div>


            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirme a senha" />
            <Select>
                <option>SELECT</option>
                <option>Responsável</option>
                <option>Educador</option>
                
            </Select>
            <Button onClick={() => {{ navigate("/") }}}>Registrar</Button>
            
        </FormContainer>
    );
}
