import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 12,
    width: "80%",
    backgroundColor: "#fff",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: colors.light.primaryBlue,
    paddingHorizontal: 15,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  modalHeaderDetail: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 20
  },
  modalHeaderDetailText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  modalHeaderText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 1
  },
  modalHeaderClose: {
    paddingTop: 20,
    paddingBottom: 40,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  buttonClose: {
    borderRadius: 30,
    backgroundColor: "#4786fc",
    padding: 3
  },
  details: {
    padding: 20,
    display: "flex",
    alignItems: "flex-start",
    gap: 10
  },
  detailsCategory: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light.bgTertiary,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 30,
    gap: 2,
    paddingBottom: 5
  },
  detailsCategoryText: {
    fontSize: 11,
    color: colors.light.fontBold
  },
  detailsTitle: {
    fontWeight: "600",
    fontSize: 22
  },
  detailsLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2
  },
  detailsLinkText: {
    fontSize: 13,
    color: colors.light.fontGrey,
    maxWidth: "90%"
  },
  detailsDescription: {
    marginHorizontal: 20,
    backgroundColor: colors.light.bgSecondary,
    borderRadius: 12,
    padding: 14
  },
  detailsDescriptionText: {
    fontSize: 14,
    color: colors.light.fontMedium,
    lineHeight: 20
  },
  footer: {
    padding: 20,
    gap: 10
  }
})