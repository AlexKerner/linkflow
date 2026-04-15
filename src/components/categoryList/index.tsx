import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  name: string;
  icon: string;
  onDelete: () => void;
};

export function CategoryList({ name, icon, onDelete }: Props) {
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
      </View>
      <View>
        <TouchableOpacity onPress={onDelete}>
          <MaterialCommunityIcons name="trash-can" size={25} color="#b22321" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
