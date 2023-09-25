import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon1 from "../../assets/images/image-6.svg";
import Icon2 from "../../assets/images/image-2.svg";
import Icon3 from "../../assets/images/image-7.svg";

export default function PopularRooms() {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <View style={styles.headerFrame}>
          <Text style={styles.header}>Popular Rooms</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.contents}>
            <View style={styles.content}>
              <Image
                style={styles.contentImage}
                source={require("../../assets/images/image-18.jpg")}
              />
              <View style={styles.contentMain}>
                <Text style={styles.roomTitle}>
                  York University drawing class
                </Text>
                <View style={styles.tags}>
                  <View style={styles.tagFrame}>
                    <Text style={styles.tagText}>studying</Text>
                  </View>
                  <View style={styles.tagFrame}>
                    <Text style={styles.tagText}>language</Text>
                  </View>
                  <View style={styles.tagFrame}>
                    <Text style={styles.tagText}>language</Text>
                  </View>
                </View>
                <View style={styles.joinedFrame}>
                  <View style={styles.joinedImages}>
                    <Icon1 style={styles.joinedImage} />
                    <Icon2 style={styles.joinedImage} />
                    <Icon3 style={styles.joinedImage} />
                  </View>
                  <Text style={styles.joinedNumbers}>+102</Text>
                </View>
              </View>
            </View>
            <View style={styles.content}>
              <Image
                style={styles.contentImage}
                source={require("../../assets/images/image-18.jpg")}
              />
              <View style={styles.contentMain}>
                <Text style={styles.roomTitle}>
                  York University drawing class
                </Text>
                <View style={styles.tags}>
                  <View style={styles.tagFrame}>
                    <Text style={styles.tagText}>studying</Text>
                  </View>
                  <View style={styles.tagFrame}>
                    <Text style={styles.tagText}>language</Text>
                  </View>
                  <View style={styles.tagFrame}>
                    <Text style={styles.tagText}>language</Text>
                  </View>
                </View>
                <View style={styles.joinedFrame}>
                  <View style={styles.joinedImages}>
                    <Icon1 style={styles.joinedImage} />
                    <Icon2 style={styles.joinedImage} />
                    <Icon3 style={styles.joinedImage} />
                  </View>
                  <Text style={styles.joinedNumbers}>+102</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.carouselDotFrame}>
          <View style={styles.carouselDotCurrent}></View>
          <View style={styles.carouselDotOther}></View>
          <View style={styles.carouselDotOther}></View>
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: { height: height * 0.3955924170616114 },
  headerFrame: {
    marginVertical: 0.0023696682464455,
  },
  header: {
    color: "#1E1E25",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  contents: {
    gap: width * 0.041025641025641,
    flexDirection: "row",
  },
  content: {
    width: width * 0.7102564102564103,
    height: height * 0.3151658767772512,
    marginTop: height * 0.0118483412322275,
  },
  contentImage: {
    height: height * 0.1872037914691943,
    width: width * 0.7102564102564103,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  contentMain: {
    width: width * 0.7102564102564103,
    paddingHorizontal: width * 0.041025641025641,
    paddingVertical: height * 0.018957345971564,
    gap: height * 0.0118483412322275,
    elevation: 3,
    shadowColor: "#00000066",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "#FFF",
  },
  roomTitle: {
    color: "#1E1E25",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
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
    borderStyle: "solid",
    borderColor: "#FFF",
  },
  joinedNumbers: {
    color: "#5D5A6D",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076,
  },
  carouselDotFrame: {
    marginTop: height * 0.018957345971564,
    justifyContent: "center",
    gap: width * 0.0111111111111111,
    flexDirection: "row",
    width: width * 0.8769230769230769,
  },
  carouselDotCurrent: {
    width: width * 0.0717948717948718,
    height: height * 0.004739336492891,
    borderRadius: 18,
    backgroundColor: "#5D5A6D",
  },
  carouselDotOther: {
    width: width * 0.0179487179487179,
    height: height * 0.004739336492891,
    borderRadius: 18,
    backgroundColor: "#C7C7C7",
  },
});
