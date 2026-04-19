import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 50,
    maxHeight: 150,
    backgroundColor: theme.bgSecondary,
    borderRadius: 12,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    color: theme.fontContrastSecondary,
    fontFamily: theme.fonts.regular
  }

})