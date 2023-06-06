import { styled } from "styled-components";
import colors from "../../common/style";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 10rem;

  @media (max-width: 420px) {
    margin-bottom: 4rem;
  }
`
export const WrapStackChoices = styled.div`
  display: flex;
  flex-direction: column;
`
export const Choices = styled.h1`
  color: ${colors.white};
  font-size: 3rem;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`