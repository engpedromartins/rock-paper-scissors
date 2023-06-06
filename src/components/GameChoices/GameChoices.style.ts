import { styled } from "styled-components";
import colors from "../../common/style";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 10rem;
`
export const WrapStackChoices = styled.div`
  display: flex;
  flex-direction: column;
`
export const Choices = styled.h1`
  color: ${colors.white};
  font-size: 3rem;
`