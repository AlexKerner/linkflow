
import { StyleSheet } from "react-native";

export const createStyles = (theme: any) => StyleSheet.create({
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
    fontFamily: theme.fonts.semiBold,
    color: theme.fontBold
  },
  content: {
    flex: 1,
    backgroundColor: theme.bgCardPrimary,
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
    color: theme.fontMedium,
    fontFamily: theme.fonts.semiBold
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
    backgroundColor: theme.primaryBlue,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: theme.primaryBlue,
    elevation: 6
  },
  buttonSaveText: {
    color: theme.fontContrast,
    fontSize: 16,
    fontFamily: theme.fonts.semiBold
  },
  drop: {
    backgroundColor: theme.bgSecondary,
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 17,
    height: 50,
  },
  dropContent: {
    borderWidth: 0,
    backgroundColor: theme.bgPrimary,
    elevation: .1
  }
})