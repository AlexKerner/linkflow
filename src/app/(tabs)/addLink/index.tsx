import { Header } from "@/src/components/header";
import { InputForm } from "@/src/components/inputForm";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function AddLink() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Adicionar Novo Link</Text>
      <View>
        <Text>Nome</Text>
        <InputForm placeholder="Ex.: Receita de Brownie" />
        <Text>URL</Text>
        <InputForm placeholder="https://www.example.com" />
      </View>
    </View>
  );
}
