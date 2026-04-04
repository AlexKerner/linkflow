import { colors } from "@/src/styles/colors";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
};

export function Category({ name, isSelected, ...rest }: Props) {
  const color = isSelected ? colors.light.bgPrimary : colors.light.fontGrey;
  const backgroundColor = isSelected
    ? colors.light.primaryBlue
    : colors.light.bgTertiary;

  return (
    <Pressable style={[styles.container, { backgroundColor }]} {...rest}>
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
