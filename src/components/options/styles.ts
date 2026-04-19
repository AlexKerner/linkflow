import { StyleSheet } from "react-native";



export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    gap: 8
  },
  primaryTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: theme.fonts.semiBold
  },
  secondaryTitle: {
    color: "#b22321",
    fontSize: 16,
    fontFamily: theme.fonts.semiBold
  }
})