import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

export default function SelectedRoomScreen() {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
}

//   :{},
//   width: width*(/390)
//   height: height*(/844)

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {},
});
