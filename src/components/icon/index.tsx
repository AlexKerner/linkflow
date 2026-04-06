import { colors } from "@/src/styles/colors";
import { Pressable, PressableProps } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
};

export function Icon({ name, isSelected, ...rest }: Props) {
  const elevation = isSelected ? 5 : 0;
  const shadowColor = isSelected ? colors.light.primaryBlue : "#fff";
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
    ></Pressable>
  );
}
