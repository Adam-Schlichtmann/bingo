import { SimpleLineIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SettingsContext, ThemeContext } from "../context";

type Props = {
  handleSafeArea?: boolean;
  title: string;
  icon?: keyof typeof SimpleLineIcons.glyphMap;
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

const Header = ({ handleSafeArea = true, title, icon = "settings" }: Props) => {
  const { color } = useContext(ThemeContext);
  const { toggleModal } = useContext(SettingsContext);
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: handleSafeArea ? top : 0,
          backgroundColor: color.mediumDark,
        },
      ]}
    >
      <View style={styles.itemLeft}>
        <Text style={[styles.title, { color: color.light }]}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.itemRight} onPress={toggleModal}>
        <SimpleLineIcons
          name={icon}
          style={[styles.icon, { color: color.light }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
