import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.light.primaryBlue
  },
  logo: {
    height: 50,
    width: 70
  },
})