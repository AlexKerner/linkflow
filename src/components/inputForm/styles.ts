import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 50,
    maxHeight: 150,
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