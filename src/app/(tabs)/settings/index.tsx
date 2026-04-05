import { Header } from "@/src/components/header";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Configurações</Text>
    </View>
  );
}
