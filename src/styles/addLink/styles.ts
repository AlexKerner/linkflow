
import { colors } from "@/src/utils/colors";
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
    fontSize: 32,
    fontWeight: "600",
    color: colors.light.fontBold
  },
  content: {
    flex: 1,
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
    fontSize: 16,
    color: colors.light.fontMedium,
    fontWeight: "500"
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#91b4e437",
    paddingTop: 20,
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonSave: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light.primaryBlue,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: colors.light.primaryBlue,
    elevation: 8
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