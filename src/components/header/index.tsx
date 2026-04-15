import { useTheme } from "@/src/theme/themeProvider";
import { Image, Text, View } from "react-native";
import { createStyles } from "./styles";

export function Header() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.header}>
      <Text style={styles.title}>LinkFlow</Text>
      <Image source={require("@/src/assets/icon.png")} style={styles.logo} />
    </View>
  );
}
