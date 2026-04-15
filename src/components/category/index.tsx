import { useTheme } from "@/src/theme/themeProvider";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
};

export function Category({ name, isSelected, ...rest }: Props) {
  const { theme } = useTheme();
  const elevation = isSelected ? 5 : 0;
  const shadowColor = theme.fontContrast;
  const color = isSelected ? theme.fontContrast : theme.fontMedium;
  const backgroundColor = isSelected ? theme.primaryBlue : theme.bgTertiary;

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
