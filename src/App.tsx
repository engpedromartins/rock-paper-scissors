import React, { useState } from 'react';
import './App.css';
import BetButton from './components/BetButton/BetButton';

enum Choice {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors',
}

const App: React.FC = () => {
  const [balance, setBalance] = useState(5000);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState('');
  const [betAmount, setBetAmount] = useState(500);

  const placeBet = (choice: Choice) => {
    if (balance < betAmount) {
      setResult('Insufficient balance for the bet.');
      return;
    }

    setPlayerChoice(choice);
    setComputerChoice(getRandomChoice());
    determineResult(choice);
  };

  const getRandomChoice = (): Choice => {
    const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineResult = (player: Choice) => {
    if (player === computerChoice) {
      setResult('try again');
      return;
    }

    const winConditions: [Choice, Choice][] = [
      [Choice.Rock, Choice.Scissors],
      [Choice.Paper, Choice.Rock],
      [Choice.Scissors, Choice.Paper],
    ];

    const isWin = winConditions.some(([playerChoice, computerChoice]) =>
      player === playerChoice && computerChoice === computerChoice
    );

    if (isWin) {
      setResult('You won!');
      setBalance((prevBalance) => prevBalance + (betAmount * 3));
    } else {
      setResult('You lost!');
      setBalance((prevBalance) => prevBalance - betAmount);
    }
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div className="balance">Balance: {balance}</div>
      <div className="choices">
        <BetButton
          onClick={placeBet}
          title={Choice.Rock} />
        <BetButton
          onClick={placeBet}
          title={Choice.Paper} />
        <BetButton
          onClick={placeBet}
          title={Choice.Scissors} />
      </div>
    </div>
  );
};

export default App;
