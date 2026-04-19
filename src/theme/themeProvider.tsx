import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

type ThemeMode = "light" | "dark";

type ThemeType = typeof colors.light & {
  fonts: {
    regular: string;
    semiBold: string;
    bold: string;
  };
};

type ThemeContextType = {
  theme: ThemeType;
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemTheme = useColorScheme();

  const [mode, setMode] = useState<ThemeMode>("light");

  // carregando tema
  useEffect(() => {
    async function loadTheme() {
      const stored = await AsyncStorage.getItem("@theme");

      if (stored) {
        setMode(stored as ThemeMode);
      } else {
        setMode(systemTheme === "dark" ? "dark" : "light");
      }
    }

    loadTheme();
  }, []);

  // salvando tema
  useEffect(() => {
    AsyncStorage.setItem("@theme", mode);
  }, [mode]);

  const theme = { ...(mode === "dark" ? colors.dark : colors.light), fonts };

  function toggleTheme() {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
