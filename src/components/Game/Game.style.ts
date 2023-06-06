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

export const Choices = styled.h1`
  color: ${colors.white};
  font-size: 3rem;
`

export const Content = styled.div`
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

export const Result = styled.div`
  color: ${({ color }) => (color === 'WON' ? colors.green : colors.red)};
  font-size: 3rem;
`

export const WrapResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
  text-align: center; 

  h2{
    text-align: center;
  }

  span{
    font-size: 1.5rem;
    color: ${colors.white};
  }
`
export const WrapScore = styled.div`
  display: flex;
  gap: .5rem;
`
