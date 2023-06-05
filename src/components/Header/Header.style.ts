import { styled } from "styled-components";
import colors from "../../common/style";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${colors.secondaryDark};
  color: ${colors.gray};
  `
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`

export const WrapBetValue = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const StyledNumberInput = styled.input`
  width: 3.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${colors.secondaryDark};
  color: ${colors.gray};
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Remover estilo personalizado da seta */
    margin: 0; /* Remover espaço em branco */
  }
`;

export const Button = styled.div`
background: transparent;
border: none;
padding: 1px;
justify-content: center;
align-items: center;
margin: 0px;
padding: 0px;
`

export const WrapButton = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`