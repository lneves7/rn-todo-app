import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 4,
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 28
  },
});