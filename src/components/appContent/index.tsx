import { useTheme } from "@/src/theme/themeProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";

export function AppContent() {
  const { mode } = useTheme();

  return (
    <>
      <StatusBar style={mode === "dark" ? "light" : "dark"} />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <Toast />
    </>
  );
}
