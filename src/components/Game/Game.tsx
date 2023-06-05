import { useState } from "react";
import { Choice } from "../../types/interface";
import BetButton from "../BetButton/BetButton";
import { Button, Container, WrapButton } from "./Game.style";

export default function Game() {
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
      setResult('It\'s a tie!');
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
    <Container>
      <h3>PICK YOUR POSITIONS</h3>
      <WrapButton>
        <BetButton
          onClick={placeBet}
          title={Choice.Rock} />
        <BetButton
          onClick={placeBet}
          title={Choice.Paper} />
        <BetButton
          onClick={placeBet}
          title={Choice.Scissors} />
      </WrapButton>
      <Button onClick={() => { }}>
        PLAY
      </Button>
      {
        playerChoice && computerChoice && (
          <div className="result">
            <p>Player choice: {playerChoice}</p>
            <p>Computer choice: {computerChoice}</p>
            <p>{result}</p>
          </div>
        )
      }
    </Container>
  )
}