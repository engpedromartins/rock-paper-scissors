import styled from 'styled-components';
import { Choice } from '../../types/interface';
import colors from '../../common/style';

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
    minWidth: '150px',
    minHeight: '100px',
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

export { Button };
