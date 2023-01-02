import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Header, Footer } from "./components";
import { ThemeContext } from "./context";
import { defaultTheme } from "./context/Theme";

import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={defaultTheme}>
        <Header title='Bingo' />
        <SafeAreaView style={{ flex: 1 }}>
          <Home />
          <StatusBar style='auto' />
          <Toast position='bottom' />
        </SafeAreaView>
        <Footer />
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
