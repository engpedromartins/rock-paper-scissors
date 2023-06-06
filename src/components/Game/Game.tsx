import { useContext, useState } from "react";
import { Choice, ResultStatus } from "../../types/interface";
import BetButton from "../BetButton/BetButton";
import { Button, Choices, Container, Content, Result, WrapButton, WrapResult, WrapScore, WrapStackChoices } from "./Game.style";
import { BetContext } from "../../contexts/BetContext";


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

    // Verificar se a opção já foi selecionada
    const existingChoiceIndex = updatedChoices.findIndex((c) => c.choice === choice);

    if (existingChoiceIndex !== -1) {
      // Remover a opção existente e subtrair seu valor do betAmount
      const removedChoice = updatedChoices.splice(existingChoiceIndex, 1)[0];
      setPlayerChoices([...updatedChoices]);
    } else if (updatedChoices.length === 2) {
      // Remover a primeira opção e seu valor
      const removedChoice = updatedChoices.shift();

      // Adicionar a nova opção e seu valor
      setPlayerChoices([...updatedChoices, { choice, bet: betContext.bet }]);
    } else {
      // Adicionar a nova opção e seu valor
      setPlayerChoices([...updatedChoices, { choice, bet: betContext.bet }]);
    }
  };



  const getRandomChoice = (): Choice => {
    const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineResult = (computerChoice: Choice, betAmount: number) => {

    if (balance < betAmount) {
      setResult({
        status: ResultStatus.NOT_ENOUGH_BALANCE,
        description: 'Insufficient balance for the bet.'
      });
      return;
    }

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
    setPlaying(true);
    let sum = 0
    playerChoices.forEach(({ bet }) => { sum += bet })
    setBalance(balance - sum)
    setDisabled(true);
    const computerChoice = getRandomChoice();
    setComputerChoice(computerChoice);
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
      {playing && !isResultValid(result) &&
        <Content>
          <WrapStackChoices>
            {playerChoices.map(({ choice }) => {
              return (
                <Choices>
                  {choice}
                </Choices>
              )
            })}
          </WrapStackChoices>
          <h2>VS</h2>
          <Choices>
            {computerChoice}
          </Choices>
        </Content>}
      {isResultValid(result) &&
        <WrapResult>
          <Result color={result.status}>{`${optionWinnner} ${result.status}`}</Result>
          <WrapScore>
            <h2>{result.description}</h2> <span>{win.toFixed(2)}</span>
          </WrapScore>
        </WrapResult>
      }
      <WrapButton>
        <BetButton
          selected={playerChoices.some((c) => c.choice === Choice.Rock)}
          bet={bet}
          onClick={placeBet}
          title={Choice.Rock}
          disabled={disabled}
          playing={playing}

        />
        <BetButton
          selected={playerChoices.some((c) => c.choice === Choice.Paper)}
          bet={bet}
          onClick={placeBet}
          title={Choice.Paper}
          disabled={disabled}
          playing={playing}
        />
        <BetButton
          selected={playerChoices.some((c) => c.choice === Choice.Scissors)}
          bet={bet}
          onClick={placeBet}
          title={Choice.Scissors}
          disabled={disabled}
          playing={playing}

        />
      </WrapButton>
      <Button
        onClick={playing ? onPressClear : onPressPlay}
        disabled={disabled}>
        {playing ? 'CLEAR' : 'PLAY'}
      </Button>

    </Container>
  )
}

//todo colocar os valores com hover em cima dos botões