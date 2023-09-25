import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

export default function UpcomingSchedule() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerTitle}>Upcoming Schedule</Text>
        <Link href="/Home/UpcomingSchedule/UpcomingScheduleDetails" asChild>
          <Pressable>
            <Text style={styles.headContainerButtonText}>View More</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerItem}>
          <View style={styles.mainContainerItemContent}>
            <View style={styles.mainContainerItemContentButton}>
              <Text style={styles.mainContainerItemContentButtonText}>
                Mar 18 @ 2 pm
              </Text>
            </View>
            <View style={styles.mainContainerItemContentTexts}>
              <Text style={styles.mainContainerItemContentText1}>
                Study with me thursday
              </Text>
              <Text style={styles.mainContainerItemContentText2}>
                From French Study
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: height * (24 / 844),
  },
  headerContainer: {
    display: "flex",
    width: "auto",
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: width * 0.0641025641025641,
  },
  headerContainerTitle: {
    color: "#1E1E25",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: height * 0.0227488151658768,
  },
  headContainerButtonText: {
    color: "#5D5A6D",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.021563981042654,
  },
  mainContainer: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: height * 0.0205128205128205,
  },
  mainContainerItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 16,
    backgroundColor: "#F6F6FA",
    width: width * 0.4692307692307692,
    height: height * 0.1125592417061611,
    paddingHorizontal: width * 0.041025641025641,
    paddingVertical: height * 0.018957345971564,
  },
  mainContainerItemContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  mainContainerItemContentButton: {
    display: "flex",
    height: height * 0.023696682464455,
    alignItems: "flex-start",
    borderRadius: 24,
    backgroundColor: "#1E1E25",
    paddingHorizontal: width * 0.0205128205128205,
    paddingVertical: height * 0.0035545023696682,
  },
  mainContainerItemContentButtonText: {
    color: "#FFF",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076,
  },
  mainContainerItemContentTexts: {
    marginTop: height * 0.009478672985782,
  },
  mainContainerItemContentText1: {
    color: "#1E1E25",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: height * 0.0199052132701422,
  },
  mainContainerItemContentText2: {
    color: "#1E1E25",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076,
  },
});
