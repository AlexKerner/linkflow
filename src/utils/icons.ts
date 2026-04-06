import { MaterialCommunityIcons } from "@expo/vector-icons"


type Icon = {
  id: string,
  name: string,
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
}

export const icons: Icon[] = [
  {
    id: "1",
    name: "folder-outline",
    icon: "folder-outline"
  },
  {
    id: "2",
    name: "code-tags",
    icon: "code-tags"
  },
  {
    id: "3",
    name: "laptop",
    icon: "laptop"
  },
  {
    id: "4",
    name: "school-outline",
    icon: "school-outline"
  },
  {
    id: "5",
    name: "web",
    icon: "web"
  },
  {
    id: "6",
    name: "account-outline",
    icon: "account-outline"
  },
  {
    id: "7",
    name: "bookmark-outline",
    icon: "bookmark-outline"
  },
  {
    id: "8",
    name: "lightbulb-outline",
    icon: "lightbulb-outline"
  },
  {
    id: "9",
    name: "id-card",
    icon: "id-card"
  },
  {
    id: "10",
    name: "video-outline",
    icon: "video-outline"
  },
  {
    id: "11",
    name: "music",
    icon: "music"
  },
  {
    id: "12",
    name: "download-outline",
    icon: "download-outline"
  },
]

