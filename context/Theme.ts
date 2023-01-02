import { createContext } from "react";

export type Theme = {
  color: {
    light: string;
    mediumLight: string;
    medium: string;
    mediumDark: string;
    dark: string;
    disabled: string;
    danger: string;
  };
};

export const defaultTheme: Theme = {
  color: {
    light: "#6da3b6",
    mediumLight: "#4b799a",
    medium: "#355368",
    mediumDark: "#21373f",
    dark: "#232323",
    disabled: "#f5f5f5",
    danger: "#68353a",
  },
};

export default createContext(defaultTheme);
