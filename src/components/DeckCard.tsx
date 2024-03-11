import React from "react";
import { Cards } from "../types";
import SpadesIcon from "../icons/Spade.png";
import DiamondIcon from "../icons/Diamond.png";
import HeartIcon from "../icons/Heart.png";
import ClubIcon from "../icons/Club.png";

export const DeckCard = (props: Cards) => {
  const { suite, rank } = props;

  const IMAGE_MAP = {
    spades: SpadesIcon,
    diamonds: DiamondIcon,
    clubs: ClubIcon,
    hearts: HeartIcon,
  };

  return (
    <div className="deck-card">
      <div className="top-left">{rank}</div>
      <img width={40} height={40} src={IMAGE_MAP[suite]} />
      <div className="bottom-right">{rank}</div>
    </div>
  );
};
