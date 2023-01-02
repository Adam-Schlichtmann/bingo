import { useContext } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../context";

const Footer = () => {
  const { color } = useContext(ThemeContext);
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={[{ paddingBottom: bottom, backgroundColor: color.mediumDark }]}
    />
  );
};

export default Footer;
