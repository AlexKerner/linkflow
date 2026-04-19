import { auth } from "@/src/services/firebase/firebaseConfig";
import {
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { AppContent } from "../components/appContent";
import { ThemeProvider } from "../theme/themeProvider";

//impede a splash de sumir automaticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Manrope_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/(tabs)");
      } else {
        router.replace("/login");
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
