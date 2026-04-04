import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  url: string;
  onDetails: () => void;
  onOpenLink: () => void;
};

export function Link({ name, url, onDetails, onOpenLink }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <MaterialIcons
            name="folder"
            size={22}
            color={colors.light.fontMedium}
          />
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
        </View>
        <TouchableOpacity onPress={onDetails}>
          <MaterialIcons
            name="more-vert"
            size={20}
            color={colors.light.fontMedium}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.contentFooter}>
          <MaterialIcons name="link" size={20} color="#3d618c8d" />
          <Text style={styles.url} numberOfLines={1} ellipsizeMode="tail">
            {url}
          </Text>
        </View>
        <TouchableOpacity onPress={onOpenLink}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={colors.light.fontMedium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
