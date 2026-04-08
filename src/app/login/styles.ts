import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.bgPrimary,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 100
  },
  logoTitle: {
    fontWeight: "800",
    color: colors.light.fontMedium,
    fontSize: 28
  },
  subtitle: {
    fontSize: 17,
    color: colors.light.fontMedium,
    fontWeight: "400",
    lineHeight: 23,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40
  },
  buttonLogin: {
    width: "100%",
    backgroundColor: colors.light.primaryBlue,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginTop: 50,
    gap: 8,
    shadowColor: colors.light.primaryBlue,
    elevation: 6
  },
  buttonLoginText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16
  },
  terms: {
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    fontSize: 11,
    color: colors.light.fontMedium
  }
})