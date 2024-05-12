import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${props => props.type === 'login' ? '#007BC0' : '#596063'};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.type === 'login' ? '#0056b3' : '#404040'};
  }
`;

export default StyledButton;
