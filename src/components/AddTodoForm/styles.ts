import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    height: 220,
    width: '100%',
    elevation: 6,
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 42,
    paddingBottom: 42, 
    paddingHorizontal:22
  },
  cardTitle: {
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 18,
    paddingLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.light,
    backgroundColor: COLORS.secondary ,
    padding: 16,
    borderRadius: 8,
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    height: 52,
  },
  input__active: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  toggle: { 
    alignSelf: 'flex-start',
    transform: [{ scaleX: 1.4}, {scaleY: 1.3}],
    marginLeft: 4,
    marginTop: 8,
  },
  toggleContainer: {
    flexDirection: "row",
  },
  toggleLabel: {
    marginTop: 22,
    marginLeft: 10,
    color: COLORS.primary,
    fontSize: 14,
    lineHeight: 16,
  },
  pressable: {
    marginTop: -10,
    paddingTop: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }
});