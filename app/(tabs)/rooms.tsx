import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "@/components/Themed";
import JoinedRooms from "@/components/Home/JoinedRooms";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <JoinedRooms />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: width * (24 / 390),
  },
});
