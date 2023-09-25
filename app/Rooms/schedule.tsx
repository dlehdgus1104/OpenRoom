import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.containerMainHeader}>Upcoming Schedule</Text>
        <View style={styles.containerMainItem}>
          <View style={styles.containerMainItemHeader}>
            <Text style={styles.containerMainItemHeaderText}>
              June 17, 2022
            </Text>
          </View>
          <Link
            href="/Home/UpcomingSchedule/UpcomingScheduleEventDetails"
            asChild
          >
            <Pressable>
              <View style={styles.containerMainItemContent}>
                <View style={styles.containerMainItemContentMain}>
                  <View style={styles.containerMainItemContentMainStatus}>
                    <View
                      style={styles.containerMainItemContentMainStatusButton}
                    >
                      <Text
                        style={
                          styles.containerMainItemContentMainStatusButtonText
                        }
                      >
                        Hosting at 2pms
                      </Text>
                    </View>
                    <View
                      style={styles.containerMainItemContentMainStatusJoined}
                    >
                      <View
                        style={
                          styles.containerMainItemContentMainStatusJoinedImages
                        }
                      >
                        <Image
                          style={
                            styles.containerMainItemContentMainStatusJoinedImage
                          }
                          source={require("../../assets/images/image_4.jpg")}
                        />
                        <Image
                          style={
                            styles.containerMainItemContentMainStatusJoinedImage
                          }
                          source={require("../../assets/images/eclipse-138.png")}
                        />
                        <Image
                          style={
                            styles.containerMainItemContentMainStatusJoinedImage
                          }
                          source={require("../../assets/images/image_3.png")}
                        />
                      </View>
                      <Text
                        style={
                          styles.containerMainItemContentMainStatusJoinedNumber
                        }
                      >
                        +3
                      </Text>
                    </View>
                  </View>
                  <View style={styles.containerMainItemContentMainNotes}>
                    <Text style={styles.containerMainItemContentMainNote1}>
                      Study with me thursday
                    </Text>
                    <Text style={styles.containerMainItemContentMainNote2}>
                      In this study session we are going to teach...
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>
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
  containerMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: width * 0.018957345971564,
    marginTop: height * 0.0118483412322275,
    marginHorizontal: width * 0.0615384615384615,
  },
  containerMainHeader: {
    color: "#1E1E25",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
  containerMainItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: height * 0.009478672985782,
  },
  containerMainItemHeader: {
    display: "flex",
    marginVertical: height * 0.0023696682464455,
  },
  containerMainItemHeaderText: {
    color: "#5D5A6D",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
  },
  containerMainItemContent: {
    display: "flex",
    width: width * 0.8769230769230769,
    paddingHorizontal: width * 0.0512820512820513,
    paddingVertical: height * 0.0248815165876777,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 16,
    backgroundColor: "#F6F6FA",
  },
  containerMainItemContentMain: {
    display: "flex",
    height: height * 0.0924170616113744,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: height * 0.0106635071090047,
  },
  containerMainItemContentMainStatus: {
    display: "flex",
    alignItems: "center",
    gap: width * 0.0435897435897436,
    flexDirection: "row",
  },
  containerMainItemContentMainStatusButton: {
    display: "flex",
    width: width * 0.2769230769230769,
    height: height * 0.0248815165876777,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#1E1E25",
  },
  containerMainItemContentMainStatusButtonText: {
    color: "#FFF",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
  },
  containerMainItemContentMainStatusJoined: {
    display: "flex",
    alignItems: "center",
    gap: width * 0.0102564102564103,
    flexDirection: "row",
  },
  containerMainItemContentMainStatusJoinedImages: {
    display: "flex",
    alignItems: "flex-start",
    gap: width * -0.0230769230769231,
    flexDirection: "row",
  },
  containerMainItemContentMainStatusJoinedImage: {
    width: width * 0.0461538461538462,
    height: height * 0.0213270142180095,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  containerMainItemContentMainStatusJoinedNumber: {
    color: "#5D5A6D",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
  },
  containerMainItemContentMainNotes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 7,
    alignSelf: "stretch",
  },
  containerMainItemContentMainNote1: {
    color: "#1E1E25",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
  containerMainItemContentMainNote2: {
    color: "#1E1E25",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
