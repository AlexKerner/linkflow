import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: theme.bgSecondary,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#91b4e437",
    paddingHorizontal: 22,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 24,
    marginTop: 30
  },
  input: {
    fontSize: 16,
    color: theme.fontContrastSecondary
  }
})