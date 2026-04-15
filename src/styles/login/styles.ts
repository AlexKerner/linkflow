
import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    backgroundColor: theme.bgPrimary,
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
    color: theme.fontMedium,
    fontSize: 28
  },
  subtitle: {
    fontSize: 17,
    color: theme.fontMedium,
    fontWeight: "400",
    lineHeight: 23,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40
  },
  buttonLogin: {
    width: "100%",
    backgroundColor: theme.primaryBlue,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginTop: 50,
    gap: 8,
    shadowColor: theme.primaryBlue,
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
    color: theme.fontMedium
  },
  login: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  }
})