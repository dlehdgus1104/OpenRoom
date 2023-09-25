import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import GroupGoalModal from "./GroupGoalModal";

export default function GroupGoal() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerFirstFrame}>
          <Text style={styles.headerFirstFrameText}>Group Goal</Text>
          <GroupGoalModal />
        </View>
        <Text style={styles.headerFarText}>History</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentSub}>
          <Text style={styles.contentText}>Talk in French for 30 mins</Text>
          <Pressable>
            <View style={styles.completeButton}>
              <Text style={styles.compelteText}>Click to complete</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.carouselDots}>
        <View style={styles.blackDot}></View>
        <View style={styles.grayDot}></View>
        <View style={styles.grayDot}></View>
      </View>
    </View>
  );
}

// style={styles.}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  carouselDots: {
    gap: width * (4 / 390),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  blackDot: {
    width: width * (28 / 390),
    height: height * (4 / 844),
    borderRadius: 18,
    backgroundColor: "#5D5A6D",
  },
  grayDot: {
    width: width * (7 / 390),
    height: height * (4 / 844),
    borderRadius: 18,
    backgroundColor: "#C7C7C7",
  },
  completeButton: {
    backgroundColor: "#1E1E25",
    borderRadius: 64,
    width: width * (107 / 390),
    height: height * (28 / 844),
    justifyContent: "center",
    alignItems: "center",
  },
  compelteText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "400",
  },
  contentText: {
    color: "#1E1E25",
    fontSize: 14,
    fontWeight: "700",
  },
  contentSub: {
    alignItems: "center",
    gap: width * (35 / 390),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: width * (16 / 390),
    paddingVertical: height * (18 / 844),
    backgroundColor: "#FFF3F9",
    borderRadius: 11,
  },
  container: {
    gap: height * (8 / 844),
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerFirstFrame: {
    flexDirection: "row",
    gap: width * (6 / 390),
    alignItems: "center",
  },
  headerFirstFrameText: {
    color: "#1E1E25",
    fontSize: 16,
    fontWeight: "700",
  },
  headerFarText: {
    color: "#5D5A6D",
    fontSize: 14,
    fontWeight: "400",
  },
});
