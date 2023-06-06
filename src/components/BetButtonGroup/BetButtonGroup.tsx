import { Choice } from "../../types/interface";
import BetButton from "./BetButton/BetButton";
import { WrapButton } from "./BetButtonGroup.style";

interface BetButtonGroupProps {
  playerChoices: { choice: Choice; bet: number }[];
  bet: number;
  onClick: (choice: Choice, bet: number) => void;
  disabled?: boolean;
  playing: boolean

}

export function BetButtonGroup(props: BetButtonGroupProps) {
  const {
    playerChoices,
    bet,
    onClick: placeBet,
    disabled,
    playing
  } = props

  return (
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
  )
}