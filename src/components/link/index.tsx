import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  name: string;
  url: string;
  icon: string;
  onDetails: () => void;
  onOpenLink: () => void;
};

export function Link({ name, url, icon, onDetails, onOpenLink }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <MaterialCommunityIcons
            name={icon as any}
            size={22}
            color={theme.fontMedium}
          />
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
        </View>
        <TouchableOpacity onPress={onDetails}>
          <MaterialIcons name="more-vert" size={20} color={theme.fontMedium} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.contentFooter}>
          <MaterialIcons name="link" size={20} color={theme.fontMedium} />
          <Text style={styles.url} numberOfLines={1} ellipsizeMode="tail">
            {url}
          </Text>
        </View>
        <TouchableOpacity onPress={onOpenLink}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={theme.fontMedium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
