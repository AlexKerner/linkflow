import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  tapBar: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 2
  },
  tabBarItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  tabBarItemActive: {
    backgroundColor: colors.light.bgTertiary,
  }
})