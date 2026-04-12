import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  headerTitle: {
    marginTop: 40,
    marginBottom: 30,
    maxWidth: 320,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 8
  },
  h1: {
    fontSize: 34,
    fontWeight: "600",
    color: colors.light.fontBold
  },
  subTitle: {
    color: colors.light.fontMedium,
    fontSize: 16,
    lineHeight: 22
  },
  content: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 12,
    elevation: .4
  },
  label: {
    fontSize: 16,
    color: colors.light.fontMedium,
    fontWeight: "500"
  },
  form: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 24
  },
  formContent: {
    width: "100%",
    gap: 8
  },
  selectCategory: {
    gap: 10,
    height: 200
  },
  footer: {
    width: "100%"
  },
  button: {
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
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff"
  }

})