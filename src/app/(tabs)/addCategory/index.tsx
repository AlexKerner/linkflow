import { CategoryList } from "@/src/components/categoryList";
import { Header } from "@/src/components/header";
import { Icons } from "@/src/components/icons";
import { InputForm } from "@/src/components/inputForm";
import {
  createCategory,
  deleteCategories,
  getCategories,
} from "@/src/services/firestore/categories";
import { styles } from "@/src/styles/addCategory/styles";
import { Category } from "@/src/utils/categories";
import { colors } from "@/src/utils/colors";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, FlatList, Pressable, Text, View } from "react-native";

export default function AddCategory() {
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

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

  async function handleDeleteCategory(id: string) {
    try {
      await deleteCategories(id);
    } catch (e) {
      console.log("erro ao deletar", e);
    }
  }

  function confirmDelete(id: string) {
    try {
      Alert.alert("Excluir", "Deseja realmente excluir esse link?", [
        {
          style: "cancel",
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => handleDeleteCategory(id),
        },
      ]);
    } catch (error) {
      throw error;
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function loadCategories() {
        const data = await getCategories();
        setCategories(data);
      }
      loadCategories();
    }, [categories]),
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
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
                  <Pressable
                    style={styles.button}
                    onPress={handleCreateCategory}
                  >
                    <Text style={styles.buttonText}>Criar Categoria</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </>
        }
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <CategoryList
              icon={item.icon}
              name={item.name}
              onDelete={() => confirmDelete(item.id)}
            />
          );
        }}
        style={styles.categories}
        contentContainerStyle={styles.categoriesContent}
        ListEmptyComponent={() => {
          return (
            <Text style={{ color: colors.light.fontBold }}>
              Não há nenhum link com essa categoria ainda.
            </Text>
          );
        }}
      />
    </View>
  );
}
