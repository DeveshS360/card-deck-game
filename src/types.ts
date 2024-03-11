export interface Cards {
  suite: Suites;
  rank: CardRanks;
}

export enum Suites {
  spades = "spades",
  clubs = "clubs",
  hearts = "hearts",
  diamonds = "diamonds",
}

export enum CardRanks {
  ace = "ace",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  jack = "jack",
  queen = "queen",
  king = "king",
}
