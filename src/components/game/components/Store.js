import { create } from "zustand";

export const useGameStore = create((set) => ({
  level: null,
  startGame: () => {},
  // CHARACTER CONTROLLER
  characterState: "Idle",
  setCharacterState: (characterState) =>
    set({
      characterState,
    }),
}));
