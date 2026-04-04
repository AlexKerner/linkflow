import { categories } from "@/src/utils/categories";
import { FlatList, View } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

type Props = {
  selected: string;
  showAll?: boolean;
  onChange: (category: string) => void;
};

export function Categories({ selected, showAll, onChange }: Props) {
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
