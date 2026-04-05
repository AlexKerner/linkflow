import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.light.bgSecondary,
    borderRadius: 12,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16
  }

})