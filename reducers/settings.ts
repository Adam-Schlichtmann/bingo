const TOGGLE_SOUND = "settings/TOGGLE_SOUND";

interface ToggleSound {
  type: typeof TOGGLE_SOUND;
}

export const toggleSound = (): ToggleSound => ({ type: TOGGLE_SOUND });

type SettingAction = ToggleSound;

type SettingState = {
  sound: boolean;
};

export const initialState: SettingState = {
  sound: true,
};

const settings = (state: SettingState, action: SettingAction) => {
  switch (action.type) {
    case TOGGLE_SOUND:
      return { ...state, sound: !state.sound };
    default:
      throw new Error();
  }
};

export default settings;
