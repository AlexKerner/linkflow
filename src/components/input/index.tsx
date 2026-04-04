import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Input({ icon, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} color={colors.light.fontMedium} size={20} />
      <TextInput
        placeholderTextColor={colors.light.fontMedium}
        {...rest}
        style={styles.input}
      />
    </View>
  );
}
