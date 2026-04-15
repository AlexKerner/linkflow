import { useTheme } from "@/src/theme/themeProvider";
import { Pressable, PressableProps } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
};

export function Icon({ name, isSelected, ...rest }: Props) {
  const { theme } = useTheme();
  const elevation = isSelected ? 4 : 0;
  const shadowColor = isSelected ? theme.primaryBlue : theme.fontContrast;
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
    ></Pressable>
  );
}
