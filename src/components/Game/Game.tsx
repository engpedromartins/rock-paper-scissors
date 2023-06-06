import { useContext, useState } from "react";
import { Choice, ResultStatus } from "../../types/interface";
import { BetContext } from "../../contexts/BetContext";
import { Button, Container } from "./Game.style";
import { GameChoices } from "../GameChoices/GameChoices";
import { BetButtonGroup } from "../BetButtonGroup/BetButtonGroup";
import { GameResult } from "../GameResult/GameResult";
import Loading from "../Loagind/Loading";

export default function Game() {
  const betContext = useContext(BetContext);
  const [playerChoices, setPlayerChoices] = useState<{ choice: Choice; bet: number }[]>([]);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<{ status: string; description: string }>({ status: '', description: '' });
  const [playing, setPlaying] = useState(false);
  const [optionWinnner, setOptionWinnner] = useState<Choice | null>(null);
  const [disabled, setDisabled] = useState(false);

  if (!betContext) {
    return null;
  }
  const { bet, balance, setBalance, win, setWin } = betContext

  const placeBet = (choice: Choice) => {
    const updatedChoices: { choice: Choice; bet: number }[] = [...playerChoices];

    // Check if the option has already been selected
    const existingChoiceIndex = updatedChoices.findIndex((c) => c.choice === choice);

    if (existingChoiceIndex !== -1) {
      // Remove the existing option
      const removedChoice = updatedChoices.splice(existingChoiceIndex, 1)[0];
      setPlayerChoices([...updatedChoices]);
    } else if (updatedChoices.length === 2) {
      // Remove the first option
      updatedChoices.shift();

      // Add new option
      setPlayerChoices([...updatedChoices, { choice, bet: betContext.bet }]);
    } else {
      setPlayerChoices([...updatedChoices, { choice, bet: betContext.bet }]);
    }
  };

  const getRandomChoice = (): Choice => {
    const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineResult = (computerChoice: Choice, betAmount: number) => {

    const winConditions: [Choice, Choice][] = [
      [Choice.Rock, Choice.Scissors],
      [Choice.Paper, Choice.Rock],
      [Choice.Scissors, Choice.Paper],
    ];

    const { isWin, optionWinnerIndex } = winConditions.reduce(
      (result, [playerChoice, computerChoiceToCompare], index) => {
        const playerMatchChoice = playerChoices.some(({ choice }) => choice === playerChoice);
        const computerMatchChoice = computerChoice === computerChoiceToCompare;

        if (playerMatchChoice && computerMatchChoice) {
          return { isWin: true, optionWinnerIndex: index };
        }

        return result;
      },
      { isWin: false, optionWinnerIndex: -1 }
    );


    if (isWin) {
      setOptionWinnner(winConditions[optionWinnerIndex][0])
      setResult({ status: ResultStatus.WON, description: 'You won!' });
      const winAmount = playerChoices.length === 1 ? betAmount * 14 : betAmount * 3;
      setBalance(winAmount + balance);
      setWin(win + winAmount)
    } else {
      setOptionWinnner(computerChoice)
      setResult({ status: ResultStatus.LOST, description: 'You lost!' });
      setWin(win - betAmount)
    }
  };

  const onPressPlay = () => {
    if (playerChoices.length === 0) return
    let sum = 0
    playerChoices.forEach(({ bet }) => { sum += bet })
    setDisabled(true);
    const computerChoice = getRandomChoice();

    if (balance < sum) {
      alert('Insufficient balance for the bet.')
      setDisabled(false);
      return;
    }

    setComputerChoice(computerChoice);
    setPlaying(true);
    setBalance(balance - sum)
    setTimeout(() => {
      determineResult(computerChoice, sum);
      setDisabled(false)
    }, 3000)
  }

  const onPressClear = () => {
    setPlaying(false);
    setPlayerChoices([]);
    setComputerChoice(null);
    setResult({ status: '', description: '' });
  }

  const isResultValid = (result: { status: string; description: string }): boolean => {
    return result.status !== '' && result.description !== '';
  };

  return (
    <Container>
      {!playing && <h3>PICK YOUR POSITIONS</h3>}
      <GameChoices
        playerChoices={playerChoices}
        computerChoice={computerChoice}
        isResultValid={isResultValid(result)}
        playing={playing}
      />
      <GameResult
        isResultValid={isResultValid(result)}
        optionWinnner={optionWinnner}
        result={result}
        win={win}
      />
      <BetButtonGroup
        playerChoices={playerChoices}
        bet={bet}
        onClick={placeBet}
        disabled={disabled}
        playing={playing}
      />
      <Button
        onClick={playing ? onPressClear : onPressPlay}
        disabled={disabled}>
        {disabled ? <Loading /> : playing ? 'CLEAR' : 'PLAY'}
      </Button>
    </Container>
  )
}