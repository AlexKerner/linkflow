import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import {
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Options } from "../options";
import { createStyles } from "./styles";

type Props = ModalProps & {
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
  onDeleteLink: () => void;
  onOpenLink: () => void;
  onPress: () => void;
};

export function ModalLink({
  title,
  description,
  url,
  icon,
  category,
  onDeleteLink,
  onOpenLink,
  onPress,
  ...rest
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <Modal {...rest}>
      <BlurView
        intensity={120}
        style={StyleSheet.absoluteFillObject}
        tint="dark"
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderClose}>
                <Pressable onPress={onPress} style={styles.buttonClose}>
                  <MaterialCommunityIcons name="close" size={21} color="#fff" />
                </Pressable>
              </View>
              <View style={styles.modalHeaderDetail}>
                <View style={styles.modalHeaderDetailText}>
                  <MaterialCommunityIcons
                    name="information-outline"
                    color={theme.fontContrast}
                  />
                  <Text style={styles.modalHeaderText}>DETALHES DO LINK</Text>
                </View>
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.detailsCategory}>
                <MaterialCommunityIcons
                  name={icon as any}
                  size={12}
                  color={theme.fontBold}
                />
                <Text style={styles.detailsCategoryText}>{category}</Text>
              </View>

              <Text style={styles.detailsTitle}>{title}</Text>
              <View style={styles.detailsLink}>
                <MaterialCommunityIcons
                  name="earth"
                  size={15}
                  color={theme.fontMedium}
                />
                <Text
                  style={styles.detailsLinkText}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {url}
                </Text>
              </View>
            </View>
            <View style={styles.detailsDescription}>
              <Text style={styles.detailsDescriptionText}>{description}</Text>
            </View>
            <View style={styles.footer}>
              <Options
                onPress={onOpenLink}
                icon="open-in-new"
                name="Abrir Link"
                variant="primary"
              />
              <Options
                onPress={onDeleteLink}
                icon="trash-can-outline"
                name="Excluir Link"
                variant="secondary"
              />
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
