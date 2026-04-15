import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  links: {
    marginTop: 25,
    maxHeight: 415
  },
  linksContent: {
    gap: 16
  }
})