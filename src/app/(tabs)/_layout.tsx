import { MyTabBar } from "@/src/components/tapBar";
import { useTheme } from "@/src/theme/themeProvider";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const { theme } = useTheme();
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        animation: "none",
        headerShown: false,
        sceneStyle: {
          backgroundColor: theme.bgPrimary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Links",
        }}
      />
      <Tabs.Screen
        name="addLink/index"
        options={{
          title: "Novo Link",
        }}
      />
      <Tabs.Screen
        name="addCategory/index"
        options={{
          title: "Categorias",
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      />
    </Tabs>
  );
}
