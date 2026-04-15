import { useTheme } from "@/src/theme/themeProvider";
import { TextInput, TextInputProps, View } from "react-native";
import { createStyles } from "./styles";

export function InputForm({ ...rest }: TextInputProps) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={theme.fontMedium}
        {...rest}
        style={styles.input}
      />
    </View>
  );
}
