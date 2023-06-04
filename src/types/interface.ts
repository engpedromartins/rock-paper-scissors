export interface GameResult {
  playerChoice: Choice;
  computerChoice: Choice;
  result: string;
}

export enum Choice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}
