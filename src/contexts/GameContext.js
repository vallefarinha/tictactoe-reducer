/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useReducer } from "react";
import t from "prop-types";
import GameReducer, {INITIAL_STATE} from "./GameReducer";

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: t.node.isRequired,
};
