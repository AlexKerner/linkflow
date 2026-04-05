import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  h1: {
    marginTop: 40,
    marginBottom: 30,
    maxWidth: 320,
    fontSize: 30,
    fontWeight: "600",
    color: colors.light.fontBold
  },
  content: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 12,
    elevation: .4
  },
  form: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 20
  },
  formContent: {
    width: "100%",
    gap: 8
  },
  label: {
    color: colors.light.fontBold,
    fontWeight: "500"
  },
  options: {
    borderTopWidth: 1,
    borderColor: "#91b4e437",
    paddingTop: 30,
    marginTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonCancel: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonSave: {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.light.primaryBlue,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 35
  },
  buttonCancelText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.light.fontMedium
  },
  buttonSaveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  },
  drop: {
    backgroundColor: colors.light.bgSecondary,
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 17,
    height: 50,
  },
  dropContent: {
    borderWidth: 0,
    backgroundColor: colors.light.bgPrimary,
    elevation: .1
  }
})