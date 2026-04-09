import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  profile: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 12,
    elevation: .4,
    marginTop: 30,
    display: "flex",
    alignItems: "center"
  },
  h1: {
    marginTop: 40,
    fontSize: 34,
    fontWeight: "700",
    color: colors.light.fontBold
  },
  logo: {
    borderRadius: 100,
    width: 120,
    height: 120
  },
  name: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: "600",
    color: colors.light.fontBold,
    textAlign: "center"
  },
  email: {
    marginTop: 14,
    fontSize: 12,
    fontWeight: "500",
    color: colors.light.fontMedium
  },
  footer: {
    marginTop: 50,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  theme: {
    width: "100%",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    gap: 12,
    elevation: 5,
    backgroundColor: colors.light.fontBold
  },
  logout: {
    marginTop: 10,
    width: "100%",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: colors.light.bgPrimary,
    gap: 12,
    elevation: 2
  },
  themeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "500"
  }
})