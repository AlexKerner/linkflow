import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingTop: 20,
    maxHeight: 140,
    elevation: .2
  },
  content: {
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#91b4e437",
  },
  contentTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.light.fontBold,
    maxWidth: 210
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15
  },
  contentFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
  },
  url: {
    fontSize: 13,
    color: "#3d618c8d",
    maxWidth: 250
  }
})