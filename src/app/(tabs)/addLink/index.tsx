import { Header } from "@/src/components/header";
import { InputForm } from "@/src/components/inputForm";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function AddLink() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.h1} numberOfLines={2}>
        Adicionar Novo Link
      </Text>
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.label}>Nome</Text>
            <InputForm placeholder="Ex.: Receita de Brownie" />
          </View>
          <View style={styles.formContent}>
            <Text style={styles.label}>URL</Text>
            <InputForm placeholder="https://www.example.com" />
          </View>
          <View style={styles.formContent}>
            <Text style={styles.label}>Categoria</Text>
            <InputForm placeholder="https://www.example.com" />
          </View>
          <View style={styles.options}>
            <Pressable
              onPress={() => console.log("cancelou")}
              style={({ pressed }) => [
                styles.buttonCancel,
                pressed && { backgroundColor: "rgba(0,0,0,0.05)" },
              ]}
            >
              <Text style={styles.buttonCancelText}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={styles.buttonSave}
              onPress={() => console.log("salvou")}
            >
              <Text style={styles.buttonSaveText}>Salvar Link</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
