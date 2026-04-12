import { MyTabBar } from "@/src/components/tapBar";
import { colors } from "@/src/utils/colors";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        animation: "shift",
        headerShown: false,
        sceneStyle: {
          backgroundColor: colors.light.bgPrimary,
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
