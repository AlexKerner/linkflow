import { Categories } from "@/src/components/categories";
import { Header } from "@/src/components/header";
import { InputSearch } from "@/src/components/inputSearch";
import { Link } from "@/src/components/link";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { styles } from "../styles";

export default function Index() {
  const [category, setCategory] = useState("Todos");
  return (
    <View style={styles.container}>
      <Header />
      <InputSearch placeholder="Pesquisar seu link..." icon="search" />
      <Categories showAll={true} selected={category} onChange={setCategory} />
      <FlatList
        data={["1", "2", "3", "4"]}
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
