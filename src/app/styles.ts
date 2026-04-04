import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.light.primaryBlue
  },
  logo: {
    height: 70,
    width: 70
  }
})