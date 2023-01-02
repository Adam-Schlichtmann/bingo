import { useContext } from "react";
import Modal from "react-native-modal";
import { View, StyleSheet, Text, SafeAreaView, Switch } from "react-native";
import { SettingsContext, ThemeContext } from "../context";
import { Header } from "../components";

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    borderTopEndRadius: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
  },
  label: { fontSize: 18 },
});

const Settings = () => {
  const { visible, settings, setSettings, toggleModal } =
    useContext(SettingsContext);
  const { color } = useContext(ThemeContext);
  return (
    <Modal
      isVisible={visible}
      style={styles.modal}
      onBackdropPress={toggleModal}
      onSwipeComplete={toggleModal}
      swipeDirection={["up", "left", "right", "down"]}
    >
      <SafeAreaView style={{ padding: 8, backgroundColor: color.light }}>
        <Header title='Settings' handleSafeArea={false} icon='arrow-down' />
        <View style={styles.row}>
          <Text style={styles.label}>Play Sounds</Text>
          <Switch
            value={settings.sound}
            onValueChange={(v) => setSettings((p) => ({ ...p, sound: v }))}
            thumbColor={color.mediumDark}
            trackColor={{ false: color.medium, true: color.medium }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Settings;
