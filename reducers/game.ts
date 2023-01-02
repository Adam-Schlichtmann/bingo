import { Column, NumberTile } from "../Types";

const CALL_NUMBER = "game/CALL_NUMBER";
const TOGGLE_COLUMN = "game/TOGGLE_COLUMN";
const RESET = "game/RESET";

interface CallNumber {
  type: typeof CALL_NUMBER;
  number: string;
}

export const callNumber = (number: string): CallNumber => ({
  type: CALL_NUMBER,
  number,
});

interface ToggleColumn {
  type: typeof TOGGLE_COLUMN;
  column: Column;
}

export const toggleColumn = (column: Column): ToggleColumn => ({
  type: TOGGLE_COLUMN,
  column,
});

interface ResetGame {
  type: typeof RESET;
}

export const resetGame = (): ResetGame => ({
  type: RESET,
});

type GameAction = CallNumber | ToggleColumn | ResetGame;

type GameState = {
  numbers: NumberTile[];
  calledOrder: number[];
};

export const initialState: GameState = {
  numbers: [...Array(75).keys()].map((i) => ({
    called: false,
    disabled: false,
    number: `${i + 1}`,
  })),
  calledOrder: [],
};

const getColumnStartEnd = (column: Column) => {
  if (column === "B") return { start: 0, end: 14 };
  if (column === "I") return { start: 15, end: 29 };
  if (column === "N") return { start: 30, end: 44 };
  if (column === "G") return { start: 45, end: 59 };
  if (column === "O") return { start: 60, end: 74 };
  return { start: 0, end: 0 };
};

const settings = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case CALL_NUMBER: {
      const n = Number.parseInt(action.number);
      if (Number.isNaN(n)) {
        return { ...state };
      }
      return {
        ...state,
        numbers: [
          ...state.numbers.slice(0, n - 1),
          { ...state.numbers[n - 1], called: true },
          ...state.numbers.slice(n),
        ],
        calledOrder: [n, ...state.calledOrder],
      };
    }
    case TOGGLE_COLUMN: {
      const { start, end } = getColumnStartEnd(action.column);
      return {
        ...state,
        numbers: [
          ...state.numbers.map((n, i) => ({
            ...n,
            disabled: i <= end && i >= start ? !n.disabled : n.disabled,
          })),
        ],
      };
    }
    case RESET: {
      return { ...initialState };
    }
    default:
      throw new Error();
  }
};

export default settings;
