import { StyleSheet } from "react-native";

export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 100
  },
  name: {
    fontSize: 14,
    fontFamily: theme.fonts.semiBold
  }
})