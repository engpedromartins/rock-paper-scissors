import { styled } from "styled-components";
import colors from "../../common/style";

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
export const Result = styled.div`
  color: ${({ color }) => (color === 'WON' ? colors.green : colors.red)};
  font-size: 3rem;
`
export const WrapScore = styled.div`
  display: flex;
  gap: .5rem;
`
