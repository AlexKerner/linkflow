import { Header } from "@/src/components/header";
import { Icons } from "@/src/components/icons";
import { InputForm } from "@/src/components/inputForm";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function AddCategory() {
  const [icon, setIcon] = useState("");
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
            <InputForm placeholder="Ex.: Inspirações de design" />
          </View>
          <View style={styles.selectCategory}>
            <Text style={styles.label}>Selecionar ícone</Text>
            <Icons onChange={setIcon} selected={icon} />
          </View>
          <View style={styles.footer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Criar Categoria</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
