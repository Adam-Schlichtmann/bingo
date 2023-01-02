import { createContext, Dispatch, SetStateAction } from "react";

export type Settings = {
  sound: boolean;
};

export type SettingsContextType = {
  visible: boolean;
  toggleModal: () => void;
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
};

export default createContext<SettingsContextType>({
  visible: false,
  toggleModal: () => {},
  settings: { sound: true },
  setSettings: () => {},
});
