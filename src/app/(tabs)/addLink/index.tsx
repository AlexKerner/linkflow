import { Header } from "@/src/components/header";
import { InputForm } from "@/src/components/inputForm";
import { getCategories } from "@/src/services/firestore/categories";
import { createLink } from "@/src/services/firestore/links";
import { styles } from "@/src/styles/addLink/styles";
import { Category } from "@/src/utils/categories";
import { colors } from "@/src/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function AddLink() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const items = categories.map((cat) => ({
    label: cat.name,
    value: cat.id,
    icon: () =>
      cat.icon ? (
        <MaterialCommunityIcons
          name={cat.icon as any}
          size={18}
          color={colors.light.fontBold}
        />
      ) : null,
  }));

  async function handleCreateLink() {
    setIsLoading(true);
    if (!title || !description || !url) {
      Alert.alert("Preencha todos os campos.");
      setIsLoading(false);
    }
    if (!category) {
      Alert.alert("Selecione uma categoria.");
      setIsLoading(false);
      return;
    }
    try {
      await createLink({ title, url, description, categoryId: category });
      setIsLoading(false);
      Alert.alert("Link criado com sucesso.");
      console.log("Link criado.");
      (setTitle(""), setDescription(""));
      setUrl("");
      setCategory("");
    } catch (error) {
      console.log("Erro ao criar link.", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function loadCategories() {
        const data = await getCategories();
        setCategories(data);
      }
      loadCategories();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.h1} numberOfLines={2}>
        Adicionar Novo Link
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" || "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 130 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.formContent}>
                <Text style={styles.label}>Nome</Text>
                <InputForm
                  value={title}
                  placeholder="Ex.: Receita de Brownie"
                  onChangeText={setTitle}
                />
              </View>
              <View style={styles.formContent}>
                <Text style={styles.label}>URL</Text>
                <InputForm
                  value={url}
                  placeholder="https://www.receitabrownie.com"
                  onChangeText={setUrl}
                />
              </View>
              <View style={styles.formContent}>
                <Text style={styles.label}>Descrição</Text>
                <InputForm
                  value={description}
                  onChangeText={setDescription}
                  style={{ height: 100 }}
                  textAlignVertical="top"
                  multiline
                  numberOfLines={4}
                  maxLength={200}
                  placeholder="Ex.: Um site com receitas detalhadas de brownie, desde as mais simples até versões gourmet. Inclui dicas de preparo, variações de ingredientes e passo a passo fácil de seguir."
                />
              </View>

              <View style={styles.formContent}>
                <Text style={styles.label}>Categoria</Text>
                <DropDownPicker
                  open={open}
                  value={category}
                  items={items}
                  setOpen={setOpen}
                  setValue={setCategory}
                  style={styles.drop}
                  listMode="SCROLLVIEW"
                  dropDownContainerStyle={styles.dropContent}
                  placeholderStyle={{ color: colors.light.fontMedium }}
                  textStyle={{ color: colors.light.fontBold, fontSize: 16 }}
                  placeholder="Selecione uma categoria"
                />
              </View>
              <View style={styles.footer}>
                <Pressable style={styles.buttonSave} onPress={handleCreateLink}>
                  {!isLoading ? (
                    <Text style={styles.buttonSaveText}>Salvar Link</Text>
                  ) : (
                    <ActivityIndicator color="#fff" size={28} />
                  )}
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
