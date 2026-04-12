import { Header } from "@/src/components/header";
import { Icons } from "@/src/components/icons";
import { InputForm } from "@/src/components/inputForm";
import { createCategory } from "@/src/services/firestore/categories";
import { styles } from "@/src/styles/addCategory/styles";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

export default function AddCategory() {
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  async function handleCreateCategory() {
    if (!name || !icon) {
      Alert.alert("Preencha todos os campos.");
      return;
    }
    try {
      await createCategory(name, icon);
      Alert.alert("Categoria criada com sucesso.");
      console.log("Categoria criada com sucesso.");
      (setName(""), setIcon(""));
    } catch (error) {
      console.log("Erro ao criar categoria.", error);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headerTitle}>
        <Text style={styles.h1}>Criar Categoria</Text>
        <Text style={styles.subTitle}>
          Organize seus links com categorias selecionadas.
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <Text style={styles.label}>Nome da categoria</Text>
            <InputForm
              placeholder="Ex.: Inspirações de design"
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.selectCategory}>
            <Text style={styles.label}>Selecionar ícone</Text>
            <Icons onChange={setIcon} selected={icon} />
          </View>
          <View style={styles.footer}>
            <Pressable style={styles.button} onPress={handleCreateCategory}>
              <Text style={styles.buttonText}>Criar Categoria</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
