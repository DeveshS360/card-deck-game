import { DeckOfCards } from "./constants";
import { DRAW_LIMIT } from "./constants";

export const getRandomCardFromDeckWhichIsNotDrawn = (
  cardsTillNow: number[]
) => {
  let count = 0;

  while (count < DRAW_LIMIT && cardsTillNow.length < DeckOfCards.length) {
    const cardIdx = Math.floor(Math.random() * DeckOfCards.length);

    if (!cardsTillNow?.includes(cardIdx)) {
      count++;
      cardsTillNow.push(cardIdx);
    }
  }
};
