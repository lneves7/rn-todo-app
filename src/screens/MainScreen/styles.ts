import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 8,
    flex: 1,
    backgroundColor: "#fff",
  },
});