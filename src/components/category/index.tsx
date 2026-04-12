import { colors } from "@/src/utils/colors";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
};

export function Category({ name, isSelected, ...rest }: Props) {
  const elevation = isSelected ? 5 : 0;
  const shadowColor = isSelected ? colors.light.primaryBlue : "#fff";
  const color = isSelected ? colors.light.bgPrimary : colors.light.fontGrey;
  const backgroundColor = isSelected
    ? colors.light.primaryBlue
    : colors.light.bgTertiary;

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor },
        { shadowColor },
        { elevation },
      ]}
      {...rest}
    >
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
