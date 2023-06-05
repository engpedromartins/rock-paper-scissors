import React from 'react'
import { Choice } from '../../types/interface';
import { Button } from './BetButton.style';

interface BetButtonProps {
  title: Choice;
  onClick: (choice: Choice) => void;
}

export default function BetButton(props: BetButtonProps) {
  const { onClick, title } = props

  const getColorByTitle = (title: string): string => {
    const colorMap: { [key: string]: string } = {
      Rock: 'red',
      Paper: 'blue',
      Scissors: 'yellow',
    };

    return colorMap[title] || 'gray';
  };

  const handleClick = () => {
    onClick(title as Choice);
  };

  const buttonColor = getColorByTitle(title);

  return (
    <Button
      buttonColor={buttonColor} onClick={handleClick}>
      {title}
    </Button >)
}