import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { createStyles } from "./styles";

type Props = PressableProps & {
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Options({ name, icon, variant = "primary", ...rest }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const shadowColor = variant === "primary" ? theme.primaryBlue : "transparent";
  const backgroundColor =
    variant === "primary" ? theme.primaryBlue : theme.bgCardPrimary;
  const elevation = variant === "primary" ? 5 : 0;
  return (
    <Pressable
      {...rest}
      style={[
        styles.container,
        { backgroundColor },
        { elevation },
        { shadowColor },
      ]}
    >
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={variant === "primary" ? "#fff" : "#b22321"}
      />
      <Text
        style={
          variant === "primary" ? styles.primaryTitle : styles.secondaryTitle
        }
      >
        {name}
      </Text>
    </Pressable>
  );
}
