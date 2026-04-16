import { CategoryList } from "@/src/components/categoryList";
import { ConfirmDialog } from "@/src/components/confirmDialog";
import { Header } from "@/src/components/header";
import { Icons } from "@/src/components/icons";
import { InputForm } from "@/src/components/inputForm";
import {
  createCategory,
  deleteCategories,
  getCategories,
} from "@/src/services/firestore/categories";
import { createStyles } from "@/src/styles/addCategory/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { Category } from "@/src/utils/categories";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";

export default function AddCategory() {
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState("");
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();
  const styles = createStyles(theme);

  async function handleCreateCategory() {
    if (!name || !icon) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos.",
      });
      return;
    }
    try {
      await createCategory(name, icon);
      Toast.show({
        type: "success",
        text1: "Categoria criada com sucesso.",
      });
      console.log("Categoria criada com sucesso.");
      (setName(""), setIcon(""));
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao criar categoria.",
      });
      console.log("Erro ao criar categoria.", error);
    }
  }

  async function handleDeleteCategory(id: string) {
    try {
      await deleteCategories(id);
      setVisible(false);
      Toast.show({
        type: "success",
        text1: "Categoria deletada.",
      });
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Erro ao deletar categoria.",
      });
      setVisible(false);
      console.log("erro ao deletar", e);
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
              onDelete={() => {
                (setCategoryId(item.id), setVisible(true));
              }}
            />
          );
        }}
        style={styles.categories}
        contentContainerStyle={styles.categoriesContent}
        ListEmptyComponent={() => {
          return (
            <Text style={{ color: theme.fontBold }}>
              Não há nenhum link com essa categoria ainda.
            </Text>
          );
        }}
      />
      <ConfirmDialog
        visible={visible}
        title="Excluir"
        message="Deseja realmente excluír esse link?"
        onConfirm={() => handleDeleteCategory(categoryId)}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
}
