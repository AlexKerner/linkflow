import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Categories } from "../components/categories";
import { Input } from "../components/input";
import { Link } from "../components/link";
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
      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Restaurante Universitário Universidade Federal Ceará"
            url="https://www.test.com.br/asdsdvbasiduvbasdiouvbi"
            onDetails={() => console.log("detalhes")}
            onOpenLink={() => console.log("abrir link")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
      />
    </View>
  );
}
