import { useState } from "react";
import { Image, Text, View } from "react-native";
import { Categories } from "../components/categories";
import { Input } from "../components/input";
import { styles } from "./styles";

export default function Index() {
  const [category, setCategory] = useState("Todos");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LinkFlow</Text>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      </View>
      <Input placeholder="Pesquisar seu link..." icon="search" />
      <Categories showAll={true} selected={category} onChange={setCategory} />
    </View>
  );
}
