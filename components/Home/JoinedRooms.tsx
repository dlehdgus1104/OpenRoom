import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

export default function JoinedRooms() {
  return (
    <Link href="Rooms/selectedRoom" asChild>
      <Pressable>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Joined Rooms</Text>
          </View>
          <View style={styles.mainFrame}>
            <Image
              style={styles.mainFrameItemMainImage}
              source={require("../../assets/images/image_5.png")}
            />
            <View style={styles.mainFrameItemContent}>
              <Text style={styles.mainFrameItemContentHeader}>
                French Study 101
              </Text>
              <View style={styles.mainFrameContentSubjectFrame}>
                <View style={styles.mainFrameContentSubjectFrameItem}>
                  <Text style={styles.mainFrameContentSubjectFrameItemText}>
                    studying
                  </Text>
                </View>
                <View style={styles.mainFrameContentSubjectFrameItem}>
                  <Text style={styles.mainFrameContentSubjectFrameItemText}>
                    language
                  </Text>
                </View>
                <View style={styles.mainFrameContentSubjectFrameItem}>
                  <Text style={styles.mainFrameContentSubjectFrameItemText}>
                    paris
                  </Text>
                </View>
              </View>
              <View style={styles.mainFrameContentStatusFrame}>
                <View style={styles.mainFrameContentStatusFrameImageFrame}>
                  <Image
                    style={styles.mainFrameContentStatusFrameImageFrameImage}
                    source={require("../../assets/images/image_1.jpg")}
                  />
                  <Image
                    style={styles.mainFrameContentStatusFrameImageFrameImage}
                    source={require("../../assets/images/eclipse-138.png")}
                  />
                  <Image
                    style={styles.mainFrameContentStatusFrameImageFrameImage}
                    source={require("../../assets/images/image_3.png")}
                  />
                </View>
                <View>
                  <Text style={styles.mainFrameContentStatusFrameNumber}>
                    +3
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.028436018957346,
  },
  headerContainer: {
    display: "flex",
  },
  header: {
    color: "#1E1E25",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: height * 0.0227488151658768,
  },
  mainFrame: {
    display: "flex",
    width: width * 0.8769230769230769,
    height: height * 0.1350710900473934,
    borderRadius: 16,
    backgroundColor: "#FFF",
    elevation: 10,
    shadowColor: "#00000066",
    marginVertical: height * 0.009478672985782,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.041025641025641,
    gap: width * 0.0307692307692308,
  },
  mainFrameItemMainImage: {
    width: width * 0.2153846153846154,
    height: height * 0.0959715639810427,
    borderRadius: 16,
  },
  mainFrameItemContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: width * 0.0153846153846154,
    flex: 1,
  },
  mainFrameItemContentHeader: {
    color: "#1E1E25",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "700",
  },
  mainFrameContentSubjectFrame: {
    flexDirection: "row",
    gap: width * 0.0153846153846154,
  },
  mainFrameContentSubjectFrameItem: {
    display: "flex",
    height: height * 0.0248815165876777,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#1E1E25",
    paddingHorizontal: width * 0.0205128205128205,
  },
  mainFrameContentSubjectFrameItemText: {
    color: "#000",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076,
  },
  mainFrameContentStatusFrame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: width * 0.0102564102564103,
  },
  mainFrameContentStatusFrameImageFrame: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: width * -0.0230769230769231,
  },
  mainFrameContentStatusFrameImageFrameImage: {
    width: width * 0.0461538461538462,
    height: height * 0.0213270142180095,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  mainFrameContentStatusFrameNumber: {
    color: "#5D5A6D",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076,
  },
});
