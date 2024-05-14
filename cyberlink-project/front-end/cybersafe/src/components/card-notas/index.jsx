import styled from "styled-components";

const Card = styled.div`
  height: 15rem;
  position: relative;
  top: -17rem;
  left: 43rem;
  background-color: #c7e4ff;
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  color: #000000;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 300px;
  background-color: #7895CB;
  padding: 10px;
  margin-right: 30px;
  margin-left: -20px;
  font-weight: bold;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  color: #FFFFFF;
`;

const Notas = styled.div`
  width: 300px;
  display: flex;
  flex-flow: row wrap;
  padding: 12px;
  margin-right: 30px;
  margin-left: -25px;
  justify-content: space-around;
`;

const CardNotas = () => (
  <Card>
    <Header>
      <div>Disciplina: Compiladores</div>
      <div>Professor: João Silva</div>
    </Header>
    <Section>
      <div>AV1</div>

      <div>AV2</div>

      <div>MÉDIA</div>
    </Section>

    <Notas>
      <p>7.5</p>
      <p>7.5</p>
      <p>7.5</p>
    </Notas>
  </Card>
);

export default CardNotas;
