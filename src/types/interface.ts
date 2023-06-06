export interface GameResult {
  playerChoice: Choice;
  computerChoice: Choice;
  result: string;
}

export enum Choice {
  Rock = "ROCK",
  Paper = "PAPER",
  Scissors = "SCISSORS",
}

export enum ResultStatus {
  NOT_ENOUGH_BALANCE = "NOT_ENOUGH_BALANCE'",
  LOST = "LOST",
  WON = "WON",
}
