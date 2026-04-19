import { AppText as Text } from "@/src/components/appText";
import { useTheme } from "@/src/theme/themeProvider";
import { BlurView } from "expo-blur";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  visible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <BlurView
        intensity={100}
        style={StyleSheet.absoluteFillObject}
        tint="dark"
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.message}>{message}</Text>

            <View style={styles.footer}>
              <Pressable onPress={onCancel} style={styles.options}>
                <Text style={{ color: theme.fontContrastSecondary }}>Não</Text>
              </Pressable>

              <Pressable onPress={onConfirm} style={styles.options}>
                <Text style={{ color: "#b22321" }}>Sim</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
