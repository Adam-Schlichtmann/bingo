import { useContext } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { ThemeContext } from "../context";
import { getLetterFromNumber } from "../utils";

type Props = {
  number: number;
};

const size = Dimensions.get("window").width / 4;
const styles = StyleSheet.create({
  container: {
    borderRadius: size,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    margin: 8,
  },

  innerWhite: {
    height: size - 20,
    width: size - 20,
    borderRadius: size - 20,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: { fontSize: 32 },
  letterText: { fontSize: 24 },
});

const Ball = ({ number }: Props) => {
  const { color } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: color.mediumDark }]}>
      <View style={styles.innerWhite}>
        <Text style={[styles.letterText, { color: color.mediumLight }]}>
          {getLetterFromNumber(number)}
        </Text>
        <Text style={[styles.numberText, { color: color.mediumLight }]}>
          {number}
        </Text>
      </View>
    </View>
  );
};

export default Ball;
