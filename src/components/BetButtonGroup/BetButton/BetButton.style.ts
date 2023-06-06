import styled from 'styled-components';
import { Choice } from '../../../types/interface';
import colors from '../../../common/style';

interface ButtonProps {
  title: Choice;
}

const Button = styled.button<ButtonProps>(({ title }) => {
  let backgroundColor = '';
  let color = '';

  if (title === Choice.Rock) {
    backgroundColor = colors.purple;
    color = colors.blue;
  } else if (title === Choice.Paper) {
    backgroundColor = colors.darkGreen;
    color = colors.green;
  } else {
    backgroundColor = colors.darkRed;
    color = colors.red;
  }

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: '.5rem',
    alignItems: 'center',
    minWidth: '160px',
    minHeight: '115px',
    backgroundColor,
    color,
    border: `1px solid ${color}`,
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '20px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      opacity: 0.9,
    },
  };

  return buttonStyle;
});

const BetValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  background-color: ${colors.white};
  border: 3px solid ${colors.blue};
  color: ${colors.primaryDark};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 8px 1px;
  min-width: 40px;
`;

export { Button, BetValue };
