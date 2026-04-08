import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Login() {
  function handleLogin() {
    router.navigate("/(tabs)");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/icon.png")} style={styles.logo} />
        <Text style={styles.logoTitle}>LinkFlow</Text>
      </View>

      <Text style={styles.subtitle}>
        Organize seus links de forma inteligente.
      </Text>
      <Pressable style={styles.buttonLogin} onPress={handleLogin}>
        <MaterialCommunityIcons name="google" size={30} color="#fff" />
        <Text style={styles.buttonLoginText}>Entrar com o Google</Text>
      </Pressable>
      <Text style={styles.terms}>
        Ao continuar, você concorda com nossos Termos e Privacidade.
      </Text>
    </View>
  );
}
