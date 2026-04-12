import { colors } from "@/src/utils/colors";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

export function InputForm({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.light.fontMedium}
        {...rest}
        style={styles.input}
      />
    </View>
  );
}
