import { colors } from "@/src/utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const icon = {
    index: (props: any) => (
      <MaterialCommunityIcons name="link" size={25} {...props} />
    ),
    "addLink/index": (props: any) => (
      <MaterialCommunityIcons name="plus-circle-outline" size={25} {...props} />
    ),
    "addCategory/index": (props: any) => (
      <MaterialCommunityIcons name="folder-outline" size={25} {...props} />
    ),
    "settings/index": (props: any) => (
      <MaterialCommunityIcons name="cog-outline" size={25} {...props} />
    ),
  };
  return (
    <View style={styles.tapBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const IconComponent = icon[route.name];

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.9}
            style={[styles.tabBarItem, isFocused && styles.tabBarItemActive]}
          >
            {IconComponent && (
              <IconComponent
                color={
                  isFocused ? colors.light.primaryBlue : colors.light.fontMedium
                }
              />
            )}
            <Text
              style={{
                color: isFocused
                  ? colors.light.primaryBlue
                  : colors.light.fontMedium,
                fontSize: 14,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
