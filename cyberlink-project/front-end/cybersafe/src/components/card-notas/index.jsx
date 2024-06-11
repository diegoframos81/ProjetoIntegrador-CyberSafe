import styled from 'styled-components';

const Card = styled.div`
  height: auto;
  position: relative;
  background-color: #c7e4ff;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
`;

const Header = styled.div`
  color: #000000;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 100%;
  background-color: #7895CB;
  padding: 10px;
  font-weight: bold;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  color: #FFFFFF;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Notas = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 12px;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
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
