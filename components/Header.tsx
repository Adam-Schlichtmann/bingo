import { SimpleLineIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../context";

type Props = {
  title: string;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  itemLeft: { flex: 1, justifyContent: "center", alignItems: "flex-start" },
  itemRight: { flex: 1, justifyContent: "center", alignItems: "flex-end" },
  icon: { fontSize: 32 },
  title: { fontSize: 32 },
});

const Header = ({ title }: Props) => {
  const { color } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: top, backgroundColor: color.mediumDark },
      ]}
    >
      <View style={styles.itemLeft}>
        <Text style={[styles.title, { color: color.light }]}>{title}</Text>
      </View>
      <View style={styles.itemRight}>
        <SimpleLineIcons
          name='settings'
          style={[styles.icon, { color: color.light }]}
        />
      </View>
    </View>
  );
};

export default Header;
