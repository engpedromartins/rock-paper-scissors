import { Result, WrapResult, WrapScore } from "./GameResult.style";

type GameResultProps = {
  result: { status: string; description: string };
  optionWinnner: string | null;
  isResultValid: boolean;
  win: number;
}

export function GameResult(props: GameResultProps) {

  const {
    result,
    optionWinnner,
    win,
    isResultValid
  } = props;

  if (!isResultValid) return null;

  return (
    <WrapResult>
      <Result color={result.status}>{`${optionWinnner} ${result.status}`}</Result>
      <WrapScore>
        <h2>{result.description}</h2> <span>{win.toFixed(2)}</span>
      </WrapScore>
    </WrapResult>
  )
}