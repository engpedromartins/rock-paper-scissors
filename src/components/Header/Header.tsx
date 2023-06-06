import React, { KeyboardEvent, useContext } from 'react';
import { BetContext } from '../../contexts/BetContext';
import { Header, HeaderContent, WrapBetValue, WrapButton, Button, StyledNumberInput } from './Header.style';

interface PropsAppBar { }

const AppBar: React.FC<PropsAppBar> = React.memo(() => {
  const minBet = 500;
  const betContext = useContext(BetContext);

  if (!betContext) {
    return null;
  }

  const { bet, setBet, balance, win } = betContext;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleIncrement = () => {
    const newBet = bet + 500;
    if (newBet <= balance) {
      setBet(newBet);
    }
  };

  const handleDecrement = () => {
    const newBet = bet - 500;
    if (newBet >= minBet) {
      setBet(newBet);
    }
  };

  return (
    <Header>
      <HeaderContent>
        <h3>Balance:</h3>
        <span>{balance}</span>
        <WrapBetValue>
          <h3>Bet:</h3>
          <StyledNumberInput
            type="number"
            min={minBet}
            step={500}
            value={bet}
            onKeyDown={handleKeyDown}
            readOnly
          />
          <WrapButton>
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={handleDecrement}>-</Button>
          </WrapButton>
        </WrapBetValue>
        <h3>WIN</h3>
        <span>{win}</span>
      </HeaderContent>
    </Header>
  );
});

export default AppBar;
