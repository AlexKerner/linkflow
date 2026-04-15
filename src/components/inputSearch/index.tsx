import { useTheme } from "@/src/theme/themeProvider";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";
import { createStyles } from "./styles";

type Props = TextInputProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function InputSearch({ icon, ...rest }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} color={theme.fontMedium} size={20} />
      <TextInput
        placeholderTextColor={theme.fontMedium}
        {...rest}
        style={styles.input}
      />
    </View>
  );
}
