import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../context";
import { Theme } from "../context/Theme";

type Props = {
  title: string;
  onPress: () => void;
  domain?: keyof Theme["color"];
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  text: { fontSize: 24 },
});

const getColors = (
  domain: Props["domain"]
): { background: keyof Theme["color"]; text: keyof Theme["color"] } => {
  if (domain === "light") return { background: "light", text: "dark" };
  if (domain === "mediumLight")
    return { background: "mediumLight", text: "mediumDark" };
  if (domain === "medium") return { background: "medium", text: "light" };
  if (domain === "mediumDark")
    return { background: "mediumDark", text: "mediumLight" };
  if (domain === "dark") return { background: "dark", text: "light" };
  if (domain === "danger") return { background: "danger", text: "light" };
  return { background: "medium", text: "light" };
};

const Button = ({ title, onPress, domain = "medium" }: Props) => {
  const { color } = useContext(ThemeContext);
  const { text, background } = getColors(domain);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: color[background] }]}
    >
      <Text style={[styles.text, { color: color[text] }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
