import { Categories } from "@/src/components/categories";
import { Header } from "@/src/components/header";
import { InputSearch } from "@/src/components/inputSearch";
import { Link } from "@/src/components/link";
import { ModalLink } from "@/src/components/modal";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  const [category, setCategory] = useState("Todos");
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Header />
      <InputSearch placeholder="Pesquisar seu link..." icon="search" />
      <Categories showAll={true} selected={category} onChange={setCategory} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={["1", "2", "3", "4"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Restaurante Universitário Universidade Federal Ceará"
            url="https://www.google.com"
            onDetails={() => setShowModal(true)}
            onOpenLink={() => console.log("abrir link")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
      />
      <ModalLink
        transparent
        animationType="fade"
        visible={showModal}
        title="Restaurante Universidade Federal Ceará"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s."
        url="https://www.test.com.br/asdsdvbasiduvbasdiouvbi/isdnsdin292tek"
        category="Faculdade"
        onDeleteLink={() => console.log("Deletou")}
        onOpenLink={() => console.log("Abriu")}
        onPress={() => setShowModal(false)}
      />
    </View>
  );
}
