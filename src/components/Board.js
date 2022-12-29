/* eslint-disable import/no-unresolved */
import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameContext } from "../contexts/GameContext";
import calculateWinner from "../utils/calculateWinner";
import Player from "./Player";
import Winner from "./Winner";
import Reset from "./Reset";
import History from './History';

import Square from "./Square";

export default function Board() {
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      dispatch({type: 'UPDATE_WINNER', payload: winner});
    }
  }, [dispatch, history, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuidv4()} />
        ))}
      </div>

      <History />
    </div>
  );
}
