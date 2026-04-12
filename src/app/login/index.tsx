import { signInWithGoogle } from "@/src/services/google/googleAuth";
import { styles } from "@/src/styles/login/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  async function handleLogin() {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      setIsLoading(false);
      router.navigate("/(tabs)");
    } catch (error) {
      console.log(error);
    }
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
      <Pressable
        style={styles.buttonLogin}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {!isLoading ? (
          <View style={styles.login}>
            <MaterialCommunityIcons name="google" size={30} color="#fff" />
            <Text style={styles.buttonLoginText}>Entrar com o Google</Text>
          </View>
        ) : (
          <View>
            <ActivityIndicator color="#fff" size={30} />
          </View>
        )}
      </Pressable>
      <Text style={styles.terms}>
        Ao continuar, você concorda com nossos Termos e Privacidade.
      </Text>
    </View>
  );
}
