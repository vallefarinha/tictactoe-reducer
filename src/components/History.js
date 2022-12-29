import React, { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import { v4 as uuidv4 } from "uuid";
import { GameContext } from "../contexts/GameContext";

export default function Board() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  function handleClick(index) {
    dispatch({type: 'UPDATE_HISTORY', payload: [history, index]});
  }

  return (
    <div>
      {history.map((data, index) => (
        <div className="history" key={uuidv4()}>
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
