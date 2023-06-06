import styled, { keyframes } from "styled-components";
import colors from "../../common/style";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingCircle = styled.div`
  border: 4px solid ${colors.white}; 
  border-top: 4px solid ${colors.blue};
  border-radius: 50%; 
  width: 32px;
  height: 32px; 
  animation: ${spinAnimation} 1s linear infinite; 
  margin: auto;
`;