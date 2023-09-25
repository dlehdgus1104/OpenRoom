import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import Girl from "../../assets/images/girl-wearing-black-top.svg";
import LocationIcon from "../../assets/images/location-icon.svg";

export default function MembersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require("../../assets/images/soccer-player-bw.png")}
        />
        <View style={styles.itemContent}>
          <Text style={styles.itemName}>Dilan W.</Text>
          <View style={styles.itemLocation}>
            <LocationIcon />
            <Text style={styles.itemLocationText}>Toronto, Canada</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemLocationText: {
    color: "#5D5A6D",
    fontSize: 12,
    fontWeight: "400",
  },
  itemLocation: {
    flexDirection: "row",
    gap: width * (4 / 390),
    justifyContent: "center",
    alignItems: "center",
  },
  itemName: {
    fontSize: 14,
    fontWeight: "700",
  },
  itemContent: {
    gap: height * (4 / 844),
  },
  image: {
    width: width * (39.698 / 390),
    height: height * (39.698 / 844),
    borderRadius: 39.698,
  },
  item: {
    paddingHorizontal: width * (24 / 390),
    paddingVertical: height * (16 / 844),
    gap: width * (17 / 390),
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  container: {
    paddingHorizontal: width * (24 / 390),
    paddingTop: height * (5 / 844),
    paddingBottom: height * (19.51 / 844),
  },
});
