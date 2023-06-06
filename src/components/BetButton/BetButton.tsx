import React, { useEffect, useState } from 'react'
import { Choice } from '../../types/interface';
import { BetValue, Button } from './BetButton.style';

interface BetButtonProps {
  title: Choice;
  onClick: (choice: Choice, bet: number) => void;
  selected: boolean;
  bet: number;
  disabled?: boolean;
  playing: boolean
}

export default function BetButton(props: BetButtonProps) {
  const { onClick, title, selected, bet, disabled, playing } = props
  const [isClicked, setIsClicked] = useState(selected);

  useEffect(() => {
    setIsClicked(selected);
  }, [selected]);

  const handleClick = () => {
    if (playing) return;
    onClick(title as Choice, bet);
    setIsClicked(!isClicked);
  };

  return (
    <Button
      title={title}
      onClick={handleClick}
      disabled={disabled}
    >
      {isClicked && <BetValue >{bet}</BetValue>}
      {title}
    </Button>
  )
}
