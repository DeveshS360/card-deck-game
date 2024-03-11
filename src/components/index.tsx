import React, { useEffect, useState } from "react";
import { DeckOfCards } from "../constants";
import { getRandomCardFromDeckWhichIsNotDrawn } from "../utils";
import { DeckCard } from "./DeckCard";
import "./index.scss";

export const CardGame = () => {
  const [drawnCards, setDrawnCards] = useState<number[]>([]);

  const handleDraw = () => {
    const cardsTillNow = [...drawnCards];
    getRandomCardFromDeckWhichIsNotDrawn(cardsTillNow);

    setDrawnCards([...cardsTillNow]);
    window.scrollTo({
      top: window.screenY,
      behavior: "smooth",
    });
  };

  const isDrawBtnDisabled = drawnCards?.length === DeckOfCards.length;

  return (
    <div>
      <div>
        <button
          className={`draw-btn ${isDrawBtnDisabled ? "disabled" : ""}`}
          onClick={handleDraw}
          disabled={isDrawBtnDisabled}
        >
          {isDrawBtnDisabled ? "Deck is empty" : "Draw random 5 cards"}
        </button>
      </div>
      <div className="card-grid">
        {drawnCards?.map((cardIdx) => {
          const card = DeckOfCards[cardIdx];
          return <DeckCard key={`${card.suite} + ${card.rank}`} {...card} />;
        })}
      </div>
    </div>
  );
};
