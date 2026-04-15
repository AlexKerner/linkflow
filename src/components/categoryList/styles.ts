import { StyleSheet } from "react-native";



export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    backgroundColor: theme.bgCardPrimary,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingTop: 20,
    maxHeight: 140,
    elevation: .2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  content: {
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    color: theme.fontBold,
    maxWidth: 210
  },
})