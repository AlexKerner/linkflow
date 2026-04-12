import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: colors.light.bgSecondary,
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
    fontSize: 16
  }
})