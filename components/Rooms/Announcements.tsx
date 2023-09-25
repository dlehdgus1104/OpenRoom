import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

export default function Announcements() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Announcements</Text>
      <Text style={styles.content}>
        Hello there ✋, welcome to our group! We study together often online but
        you’re always welcome to join offline/in person study!
      </Text>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    gap: height * (8 / 844),
  },
  header: {
    color: "#1E1E25",
    fontSize: 16,
    fontWeight: "700",
  },
  content: {
    color: "#30314A",
    fontSize: 16,
    fontWeight: "400",
  },
});
