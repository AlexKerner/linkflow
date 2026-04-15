import { useTheme } from "@/src/theme/themeProvider";
import { icons } from "@/src/utils/icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, View } from "react-native";
import { Icon } from "../icon";
import { styles } from "./styles";

type Props = {
  selected: string;
  onChange: (icon: string) => void;
};

export function Icons({ selected, onChange }: Props) {
  const { theme } = useTheme();
  return (
    <View style={styles.all}>
      <FlatList
        data={icons}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.icons}>
            <Icon
              isSelected={item.name === selected}
              name={item.name}
              onPress={() => onChange(item.name)}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color={
                  selected === item.name ? theme.bgPrimary : theme.fontMedium
                }
              />
            </Icon>
          </View>
        )}
      />
    </View>
  );
}
