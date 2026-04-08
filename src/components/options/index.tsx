import { colors } from "@/src/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Options({ name, icon, variant = "primary", ...rest }: Props) {
  const backgroundColor =
    variant === "primary" ? colors.light.primaryBlue : "#fff";
  const elevation = variant === "primary" ? 5 : 0;
  return (
    <Pressable
      {...rest}
      style={[styles.container, { backgroundColor }, { elevation }]}
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
