import React from 'react'
import { Choice } from '../../types/interface';
import { Button } from './BetButton.style';

interface BetButtonProps {
  title: Choice;
  onClick: (choice: Choice) => void;
}

export default function BetButton(props: BetButtonProps) {
  const { onClick, title } = props

  const handleClick = () => {
    onClick(title as Choice);
  };

  return (
    <Button
      title={title}
      onClick={handleClick}>
      {title}
    </Button >)
}