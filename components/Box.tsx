import { cloneElement, useContext } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context";
import { NumberTile } from "../Types";

type Props = {
  number: NumberTile;
};

const size = Dimensions.get("window").width / 10;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    margin: 2,
  },
  text: { fontSize: 18 },
});

const Box = ({ number }: Props) => {
  const { color } = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        number.disabled || number.called
          ? { backgroundColor: number.called ? color.medium : color.disabled }
          : {},
      ]}
    >
      <Text style={styles.text}>{number.number}</Text>
    </View>
  );
};

export default Box;
