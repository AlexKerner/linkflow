import { ConfirmDialog } from "@/src/components/confirmDialog";
import { Header } from "@/src/components/header";
import { auth } from "@/src/services/firebase/firebaseConfig";
import { createStyles } from "@/src/styles/settings/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Settings() {
  const { toggleTheme, theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const styles = createStyles(theme);

  async function handleLogout() {
    await GoogleSignin.signOut();
    await signOut(auth);
    setVisible(false);
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
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.theme} onPress={toggleTheme}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={26}
            color={theme.fontContrast}
          />
          <Text style={styles.themeText}>Mudar tema</Text>
        </Pressable>
        <Pressable style={styles.logout} onPress={() => setVisible(true)}>
          <MaterialCommunityIcons name="logout" size={26} color="#b22321" />
          <Text style={styles.logoutText}>Encerrar sessão</Text>
        </Pressable>
      </View>
      <ConfirmDialog
        visible={visible}
        title="Sair"
        message="Deseja realmente sair desta conta?"
        onConfirm={handleLogout}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
}
