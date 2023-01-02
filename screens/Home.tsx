import { useContext, useEffect, useReducer } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import * as Speech from "expo-speech";

import { Ball, Box, Button } from "../components";
import {
  settingsReducer,
  initialSettingsState,
  gameReducer,
  resetGame,
  initialGameState,
  callNumber,
} from "../reducers";
import { getLetterFromNumber } from "../utils";
import Toast from "react-native-toast-message";
import { ThemeContext } from "../context";

const randomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.get("window").width / 20,
    flex: 1,
  },
  calledContainer: { height: Dimensions.get("window").width / 3 },
  text: {},
  row: { flex: 1, flexDirection: "row", flexWrap: "wrap" },
});

const Home = () => {
  const { color } = useContext(ThemeContext);
  const [settings, settingsDispatch] = useReducer(
    settingsReducer,
    initialSettingsState
  );
  const [game, gameDispatch] = useReducer(gameReducer, initialGameState);

  const callNumberCallback = async () => {
    const avail = game.numbers.filter((n) => !n.called && !n.disabled);
    if (avail.length) {
      const index = randomInt(avail.length - 1);
      try {
        const isSpeaking = await Speech.isSpeakingAsync();
        if (isSpeaking) {
          await Speech.stop();
        }
        gameDispatch(callNumber(avail[index].number));
        await Speech.speak(
          `${getLetterFromNumber(Number.parseInt(avail[index].number))} ${
            avail[index].number
          }`
        );
      } catch (e) {
        Toast.show({
          type: "error",
          text1: "Error Reading Text",
        });
      }
    }
  };

  const resetGameCallback = () => {
    gameDispatch(resetGame());
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color.light }]}>
      <ScrollView
        horizontal
        style={styles.calledContainer}
        showsHorizontalScrollIndicator={false}
      >
        {game.calledOrder.map((b) => (
          <Ball number={b} />
        ))}
      </ScrollView>
      <ScrollView>
        <View style={styles.row}>
          {game.numbers.map((n, i) => (
            <View key={n.number} style={{ flexDirection: "row" }}>
              {i % 15 === 0 && (
                <Box
                  number={{
                    number: getLetterFromNumber(Number.parseInt(n.number)),
                    disabled: false,
                    called: false,
                  }}
                />
              )}
              <Box number={n} />
            </View>
          ))}
        </View>
      </ScrollView>
      <Button onPress={callNumberCallback} title='Next' domain='medium' />
      <Button onPress={resetGameCallback} title='RESET' domain='danger' />
    </SafeAreaView>
  );
};

export default Home;
