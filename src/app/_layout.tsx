import { auth } from "@/src/services/firebase/firebaseConfig";
import { router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { AppContent } from "../components/appContent";
import { ThemeProvider } from "../theme/themeProvider";

export default function RootLayout() {
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

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
