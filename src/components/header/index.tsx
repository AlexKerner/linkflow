import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>LinkFlow</Text>
      <Image source={require("@/src/assets/icon.png")} style={styles.logo} />
    </View>
  );
}
