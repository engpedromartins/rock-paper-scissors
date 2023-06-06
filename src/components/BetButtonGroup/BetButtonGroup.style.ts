import { styled } from "styled-components";

export const WrapButton = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 420px) {
    flex-direction: column; 
  }
`