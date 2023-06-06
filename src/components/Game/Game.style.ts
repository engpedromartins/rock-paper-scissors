import { styled } from "styled-components";
import colors from "../../common/style";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 35px);  background-image: linear-gradient(to top, #1e1e1e, #484848);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 4rem;
  gap: 1rem;
`

export const Button = styled.button`
    min-width: 150px;
    background-color: ${colors.secondaryDark};
    color: ${colors.gold};
    border: 1px solid  ${colors.gold};
    border-radius: 50px;
    padding: 20px;
    transition: background-color 0.3s ease;
    '&:hover': {
      opacity: 0.9;
    };
    margin-top: 20px;
`