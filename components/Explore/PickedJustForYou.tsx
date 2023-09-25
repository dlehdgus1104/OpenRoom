import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";

export default function PickedJustForYou() {
  return (
    <View style={styles.container}>
      <View style={styles.headerFrame}>
        <Text style={styles.headerText}>Picked Just For You</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/stock-image.jpeg")}
          style={styles.imageHead}
        />
        <View style={styles.contentMain}>
          <Text style={styles.roomTitle}>Stock investment group</Text>
          <View style={styles.tags}>
            <View style={styles.tagFrame}>
              <Text style={styles.tagText}>investment</Text>
            </View>
            <View style={styles.tagFrame}>
              <Text style={styles.tagText}>money</Text>
            </View>
            <View style={styles.tagFrame}>
              <Text style={styles.tagText}>stock</Text>
            </View>
          </View>
          <View style={styles.joinedFrame}>
            <View style={styles.joinedImages}>
              <Image
                source={require("../../assets/images/image_1.jpg")}
                style={styles.joinedImage}
              />
              <Image
                source={require("../../assets/images/eclipse-138.png")}
                style={styles.joinedImage}
              />
              <Image
                source={require("../../assets/images/image_3.png")}
                style={styles.joinedImage}
              />
            </View>
            <Text style={styles.joinedNumbers}>+3</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.addButtoFrame}>
        <View style={styles.addButtonPlusFrame}>
          <View style={styles.addButtonPlus}></View>
        </View>
      </View> */}
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/stock-image.jpeg")}
          style={styles.imageHead}
        />
        <View style={styles.contentMain}>
          <Text style={styles.roomTitle}>Stock investment group</Text>
          <View style={styles.tags}>
            <View style={styles.tagFrame}>
              <Text style={styles.tagText}>investment</Text>
            </View>
            <View style={styles.tagFrame}>
              <Text style={styles.tagText}>money</Text>
            </View>
            <View style={styles.tagFrame}>
              <Text style={styles.tagText}>stock</Text>
            </View>
          </View>
          <View style={styles.joinedFrame}>
            <View style={styles.joinedImages}>
              <Image
                source={require("../../assets/images/image_1.jpg")}
                style={styles.joinedImage}
              />
              <Image
                source={require("../../assets/images/eclipse-138.png")}
                style={styles.joinedImage}
              />
              <Image
                source={require("../../assets/images/image_3.png")}
                style={styles.joinedImage}
              />
            </View>
            <Text style={styles.joinedNumbers}>+3</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    gap: height * 0.0118483412322275,
    width: width * 0.8769230769230769,
  },
  headerFrame: {
    marginVertical: height * 0.0023696682464455,
  },
  headerText: {
    color: "#1E1E25",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  content: {
    gap: height * 0.0307692307692308,
    paddingHorizontal: width * 0.041025641025641,
    alignItems: "center",
    flexDirection: "row",
    height: height * 0.135071090047393,
    backgroundColor: "#FFF",
    elevation: 3,
    shadowColor: "#00000066",
    borderRadius: 16,
  },
  contentMain: {
    gap: height * 0.009478672985782,
  },
  roomTitle: {
    color: "#1E1E25",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  imageHead: {
    width: width * 0.2153846153846154,
    height: height * 0.0959715639810427,
    borderRadius: 16,
  },
  tags: {
    gap: width * 0.0153846153846154,
    flexDirection: "row",
  },
  tagFrame: {
    height: height * 0.0248815165876777,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#1E1E25",
    paddingHorizontal: width * 0.0205128205128205,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "400",
  },
  joinedFrame: {
    alignItems: "center",
    flexDirection: "row",
    gap: width * 0.0102564102564103,
  },
  joinedImages: {
    flexDirection: "row",
    gap: width * -0.0230769230769231,
  },
  joinedImage: {
    width: width * 0.0461538461538462,
    height: height * 0.0213270142180095,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  joinedNumbers: {
    color: "#5D5A6D",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076,
  },
  addButtoFrame: {
    width: width * 0.1487179487179487,
    height: height * 0.0687203791469194,
    backgroundColor: "#4A27D5",
    borderRadius: 9999999,
    marginTop: -88,
  },
  addButtonPlusFrame: {},
  addButtonPlus: {},
});
