import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import { Header, Footer } from "./components";
import { SettingsContext, ThemeContext } from "./context";
import { SettingsContextType } from "./context/Settings";
import { defaultTheme } from "./context/Theme";

import Home from "./screens/Home";
import Settings from "./screens/Settings";

export default function App() {
  const [settings, setSettings] = useState<SettingsContextType["settings"]>({
    sound: true,
  });
  const [settingsModalVisible, setSettingsModalVisible] =
    useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <SettingsContext.Provider
        value={{
          visible: settingsModalVisible,
          toggleModal: () => setSettingsModalVisible(!settingsModalVisible),
          settings,
          setSettings,
        }}
      >
        <ThemeContext.Provider value={defaultTheme}>
          <Header title='Bingo' />
          <SafeAreaView style={{ flex: 1 }}>
            <Home />
            <StatusBar style='auto' />
            <Toast position='bottom' />
          </SafeAreaView>
          <Footer />
          <Settings />
        </ThemeContext.Provider>
      </SettingsContext.Provider>
    </SafeAreaProvider>
  );
}
