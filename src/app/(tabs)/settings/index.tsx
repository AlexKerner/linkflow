import { Header } from "@/src/components/header";
import { auth } from "@/src/services/firebase/firebaseConfig";
import { styles } from "@/src/styles/settings/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { signOut } from "firebase/auth";
import { Alert, Image, Pressable, Text, View } from "react-native";

export default function Settings() {
  async function handleLogout() {
    await GoogleSignin.signOut();
    await signOut(auth);
  }
  function confirmLogout() {
    try {
      Alert.alert("Sair", "Deseja encerrar sessão?", [
        {
          style: "cancel",
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => handleLogout(),
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
  const user = auth.currentUser;
  const photo = user?.photoURL?.replace(/s\d+-c/, "s400-c");
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.profile}>
        <Image
          source={{ uri: photo || "https://via.placeholder.com/100" }}
          style={styles.logo}
        />
        <Text style={styles.name}>{user?.displayName}</Text>
        <Text style={styles.email}>alexanderkerner06@gmail.com</Text>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.theme}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={26}
            color="#fff"
          />
          <Text style={styles.themeText}>Mudar tema</Text>
        </Pressable>
        <Pressable style={styles.logout} onPress={confirmLogout}>
          <MaterialCommunityIcons name="logout" size={26} color="#b22321" />
          <Text style={styles.logoutText}>Encerrar sessão</Text>
        </Pressable>
      </View>
    </View>
  );
}
