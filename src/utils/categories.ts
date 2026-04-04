import { MaterialIcons } from "@expo/vector-icons"



export type Category = {
  id: string,
  name: string,
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Pessoal",
    icon: "person"
  },
  {
    id: "2",
    name: "Faculdade",
    icon: "school"
  },
  {
    id: "3",
    name: "Perfil",
    icon: "laptop"
  },
  {
    id: "4",
    name: "Programação",
    icon: "code"
  }
]