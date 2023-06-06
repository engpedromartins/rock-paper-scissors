import { Choices, Container, WrapStackChoices } from "./GameChoices.style"
import { Choice } from "../../types/interface";

type GameChoicesProps = {
  playerChoices: { choice: Choice; bet: number }[];
  computerChoice: Choice | null;
  isResultValid: boolean
  playing: boolean;
}

export const GameChoices: React.FC<GameChoicesProps> = ({
  playerChoices,
  computerChoice,
  isResultValid,
  playing,
}) => {

  if (!(playing && !isResultValid)) return null;

  return (
    <Container>
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
    </Container>
  )
}