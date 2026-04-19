
import { StyleSheet } from "react-native";

export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  profile: {
    backgroundColor: theme.bgCardPrimary,
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
    fontFamily: theme.fonts.bold,
    color: theme.fontBold
  },
  logo: {
    borderRadius: 100,
    width: 150,
    height: 150
  },
  name: {
    marginTop: 14,
    fontSize: 22,
    fontFamily: theme.fonts.semiBold,
    color: theme.fontBold,
    textAlign: "center"
  },
  email: {
    marginTop: 8,
    fontSize: 13,
    fontFamily: theme.fonts.semiBold,
    color: theme.fontMedium
  },
  footer: {
    marginTop: 15,
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
    paddingVertical: 18,
    gap: 12,
    elevation: 3,
    backgroundColor: theme.fontBold,
    shadowColor: theme.primaryBlue,
  },
  logout: {
    marginTop: 10,
    width: "100%",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    backgroundColor: theme.bgPrimary,
    gap: 12,
    elevation: 2
  },
  themeText: {
    color: theme.fontContrast,
    fontSize: 17,
    fontFamily: theme.fonts.semiBold
  },
  logoutText: {
    fontSize: 17,
    fontFamily: theme.fonts.semiBold,
    color: theme.fontBold
  }
})