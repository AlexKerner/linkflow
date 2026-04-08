import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.light.primaryBlue
  },
  logo: {
    height: 50,
    width: 70
  },
  links: {
    marginTop: 40,
    maxHeight: 410
  },
  linksContent: {
    gap: 16
  }
})