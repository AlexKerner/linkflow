import { StyleSheet } from "react-native";



export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: 300,
    padding: 20,
    borderRadius: 12,
    gap: 12,
    backgroundColor: theme.bgCardPrimary
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: theme.fontBold
  },
  message: {
    color: theme.fontContrastSecondary
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  options: {
    paddingHorizontal: 12,
    paddingVertical: 5
  }
})