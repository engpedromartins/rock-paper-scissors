import styled from 'styled-components';

export const Button = styled.button<{ buttonColor: string }>`
  background-color: ${(props) => props.buttonColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
