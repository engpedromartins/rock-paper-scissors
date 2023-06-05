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
width: 100%;
padding: 0.5rem;
border: none;
border-radius: 0.5rem;
background-color: ${colors.secondaryDark};
color: ${colors.gray};
appearance: none;

appearance: textfield; /* Remover controle de incremento */
  -moz-appearance: textfield; /* Remover controle de incremento no Firefox */

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none; /* Ocultar a seta */
  }

&:focus {
  outline: none;
}
`;