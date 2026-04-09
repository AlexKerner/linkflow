import { Header } from "@/src/components/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.profile}>
        <Image
          source={require("@/assets/images/adaptive-icon.png")}
          style={styles.logo}
        />
        <Text style={styles.name}>Alexander Kerner Rodrigues Ferreira</Text>
        <Text style={styles.email}>alexanderkerner06@gmail.com</Text>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.theme}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={28}
            color="#fff"
          />
          <Text style={styles.themeText}>Mudar tema</Text>
        </Pressable>
        <Pressable style={styles.logout}>
          <MaterialCommunityIcons name="logout" size={28} color="#b22321" />
          <Text style={styles.logoutText}>Encerrar sessão</Text>
        </Pressable>
      </View>
    </View>
  );
}
