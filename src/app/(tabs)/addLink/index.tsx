import { Header } from "@/src/components/header";
import { InputForm } from "@/src/components/inputForm";
import { colors } from "@/src/styles/colors";
import { categories } from "@/src/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./styles";

export default function AddLink() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState(
    categories.map((cat) => ({
      label: cat.name,
      value: cat.id,
      icon: () =>
        cat.icon ? (
          <MaterialIcons
            name={cat.icon}
            size={18}
            color={colors.light.fontBold}
          />
        ) : null,
    })),
  );
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.h1} numberOfLines={2}>
        Adicionar Novo Link
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.formContent}>
                <Text style={styles.label}>Nome</Text>
                <InputForm placeholder="Ex.: Receita de Brownie" />
              </View>
              <View style={styles.formContent}>
                <Text style={styles.label}>URL</Text>
                <InputForm placeholder="https://www.receitabrownie.com" />
              </View>
              <View style={styles.formContent}>
                <Text style={styles.label}>Descrição</Text>
                <InputForm
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
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.drop}
                  listMode="SCROLLVIEW"
                  dropDownContainerStyle={styles.dropContent}
                  placeholderStyle={{ color: colors.light.fontMedium }}
                  textStyle={{ color: colors.light.fontBold, fontSize: 16 }}
                  placeholder="Selecione uma categoria"
                />
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
