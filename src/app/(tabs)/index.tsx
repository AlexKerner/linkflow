import { Categories } from "@/src/components/categories";
import { Header } from "@/src/components/header";
import { InputSearch } from "@/src/components/inputSearch";
import { Link } from "@/src/components/link";
import { ModalLink } from "@/src/components/modal";
import { getCategories } from "@/src/services/firestore/categories";
import { deleteLink, getLinks } from "@/src/services/firestore/links";
import { Category } from "@/src/utils/categories";
import { Link as Links } from "@/src/utils/links";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, FlatList, Linking, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  const [category, setCategory] = useState("Todos");
  const [showModal, setShowModal] = useState(false);
  const [links, setLinks] = useState<Links[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedLink, setSelectedLink] = useState<Links | null>(null);
  const [loading, setLoading] = useState(true);

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
      setSelectedLink(null);
    } catch (e) {
      console.log("erro ao deletar", e);
    }
  }

  function confirmDelete() {
    try {
      Alert.alert("Excluir", "Deseja realmente excluir esse link?", [
        {
          style: "cancel",
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => handleDeleteLink(),
        },
      ]);
    } catch (error) {
      throw error;
    }
  }

  async function handleOpen(url: string) {
    if (!url) {
      return;
    }
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Link", "Não foi possível abrir o link.");
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

      {!loading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={links}
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
        />
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
        onDeleteLink={confirmDelete}
        onOpenLink={() => console.log("Abriu")}
        onPress={() => {
          setShowModal(false);
          setSelectedLink(null);
        }}
      />
    </View>
  );
}
