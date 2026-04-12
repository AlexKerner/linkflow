import { getCategories } from "@/src/services/firestore/categories";
import { Category as Cat } from "@/src/utils/categories";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

type Props = {
  selected: string;
  showAll?: boolean;
  onChange: (category: string) => void;
};

export function Categories({ selected, showAll, onChange }: Props) {
  const [categories, setCategories] = useState<Cat[]>([]);
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
    <View style={styles.all}>
      {showAll && (
        <Category
          name="Todos"
          isSelected={"Todos" === selected}
          onPress={() => onChange("Todos")}
        />
      )}

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category
            name={item.name}
            isSelected={item.name === selected}
            onPress={() => onChange(item.name)}
          />
        )}
        horizontal
        contentContainerStyle={styles.content}
      />
    </View>
  );
}
