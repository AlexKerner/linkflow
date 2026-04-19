import { StyleSheet } from "react-native";



export const createStyles = (theme: any) => StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    color: theme.primaryBlue
  },
  logo: {
    height: 50,
    width: 70
  },
})