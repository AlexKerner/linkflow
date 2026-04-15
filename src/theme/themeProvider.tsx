import { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { colors } from "../utils/colors";

type Props = {
  children: ReactNode;
};

const ThemeContext = createContext({} as any);

export function ThemeProvider({ children }: Props) {
  const systemTheme = useColorScheme();

  const [theme, setTheme] = useState(
    systemTheme === "dark" ? colors.dark : colors.light,
  );

  function toggleTheme() {
    setTheme((prev) => (prev === colors.dark ? colors.light : colors.dark));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
