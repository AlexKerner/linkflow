import { Redirect } from "expo-router";

export default function Index() {
  const isLogged = false; // depois você troca por auth real

  if (!isLogged) {
    return <Redirect href="/login" />;
  } else {
    return <Redirect href="/(tabs)" />;
  }
}
