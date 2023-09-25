import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function CreateRoom() {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <View>
          <Text style={styles.title1}>How about your own room?</Text>
          <Text style={styles.title2}>Find your own studymate</Text>
        </View>
        <Link href="/Explore/createRoomRoomSetting" asChild>
          <Pressable>
            <View style={styles.createRoomFrame}>
              <Text style={styles.createRoomText}>Create Room</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.8769230769230769,
    paddingHorizontal: width * 0.0615384615384615,
    paddingVertical: height * 0.028436018957346,
    borderRadius: 16,
    backgroundColor: "#4A27D5",
  },
  containerMain: {
    alignItems: "center",
    gap: height * 0.018957345971564,
  },
  title1: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  title2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
  },
  createRoomFrame: {
    width: width * 0.3051282051282051,
    height: height * 0.0462085308056872,
    borderRadius: 64,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  createRoomText: {
    color: "#1E1E25",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
  },
});
