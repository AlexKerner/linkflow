import { Header } from "@/src/components/header";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function AddCategory() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Categorias</Text>
    </View>
  );
}
