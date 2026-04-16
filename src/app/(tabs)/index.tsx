import { Categories } from "@/src/components/categories";
import { ConfirmDialog } from "@/src/components/confirmDialog";
import { Header } from "@/src/components/header";
import { InputSearch } from "@/src/components/inputSearch";
import { Link } from "@/src/components/link";
import { ModalLink } from "@/src/components/modal";
import { getCategories } from "@/src/services/firestore/categories";
import { deleteLink, getLinks } from "@/src/services/firestore/links";
import { createStyles } from "@/src/styles/index/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { Category } from "@/src/utils/categories";
import { colors } from "@/src/utils/colors";
import { Link as Links } from "@/src/utils/links";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, Linking, Text, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Index() {
  const [category, setCategory] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [links, setLinks] = useState<Links[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedLink, setSelectedLink] = useState<Links | null>(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const filteredLinks = !category
    ? links
    : links.filter((link) => link.categoryId === category);

  const categoriesMap = categories.reduce(
    (acc, cat) => {
      acc[cat.id] = cat;
      return acc;
    },
    {} as Record<string, Category>,
  );

  const selectedCategory = selectedLink
    ? categoriesMap[selectedLink.categoryId]
    : null;

  async function handleDeleteLink() {
    if (!selectedLink) return;

    try {
      await deleteLink(selectedLink.id);
      setLinks((prev) => prev.filter((link) => link.id !== selectedLink.id));
      setShowModal(false);
      setVisible(false);
      Toast.show({
        type: "success",
        text1: "Link excluído com sucesso.",
      });
      setSelectedLink(null);
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Erro ao excluir link.",
      });
      setVisible(false);
      console.log("erro ao deletar", e);
    }
  }

  async function handleOpen(url: string) {
    if (!url) {
      return;
    }
    try {
      await Linking.openURL(url);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível abrir o link.",
      });
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        const [linksData, categoriesData] = await Promise.all([
          getLinks(),
          getCategories(),
        ]);

        setLinks(linksData);
        setCategories(categoriesData);
        setLoading(false);
      }

      loadData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header />
      <InputSearch placeholder="Pesquisar seu link..." icon="search" />

      <Categories showAll={true} selected={category} onChange={setCategory} />

      {!loading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredLinks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const category = categoriesMap[item.categoryId];

            return (
              <Link
                icon={category?.icon}
                name={item.title}
                url={item.url}
                onDetails={() => {
                  setSelectedLink(item);
                  setShowModal(true);
                }}
                onOpenLink={() => handleOpen(item.url)}
              />
            );
          }}
          style={styles.links}
          contentContainerStyle={styles.linksContent}
          ListEmptyComponent={() => {
            if (links.length === 0) {
              return (
                <Text style={{ color: theme.fontBold }}>
                  Ainda não foi criado nenhum link. Vá para a página
                  "Categorias", crie sua primeira categoria para que possa ser
                  criado um link, e depois vá para "Novo link", para criar seu
                  primeiro link.
                </Text>
              );
            }
            return (
              <Text style={{ color: theme.fontBold }}>
                Não há nenhum link com essa categoria ainda.
              </Text>
            );
          }}
        />
      ) : (
        <ActivityIndicator color={colors.light.primaryBlue} size={40} />
      )}

      <ModalLink
        transparent
        animationType="fade"
        visible={showModal}
        icon={selectedCategory?.icon ?? "loading"}
        title={selectedLink?.title ?? "Link"}
        description={selectedLink?.description ?? "Sem descrição"}
        url={selectedLink?.url ?? ""}
        category={selectedCategory?.name ?? "Sem categoria"}
        onDeleteLink={() => setVisible(true)}
        onOpenLink={() => handleOpen(selectedLink?.url || "")}
        onPress={() => {
          setShowModal(false);
          setSelectedLink(null);
        }}
      />

      <ConfirmDialog
        visible={visible}
        title="Excluir"
        message="Deseja realmente excluír esse link?"
        onConfirm={handleDeleteLink}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
}
