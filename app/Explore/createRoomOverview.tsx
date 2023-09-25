import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import { Link } from "expo-router";
import CompleteModal from "@/components/Explore/CompleteModal";

export default function CreateRoomOverviewScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.header}>Preview Room Cover</Text>
          <View style={styles.prcContents}>
            <Image
              style={styles.prcImage}
              source={require("../../assets/images/image-20.png")}
            />
            <View style={styles.prcContent}>
              <Text style={styles.prcContentHeader}>
                Englishs / ELA / IELTS
              </Text>
              <View style={styles.prcContentSubjects}>
                <View style={styles.prcContentSubject}>
                  <Text style={styles.prcContentSubjectText}>studying</Text>
                </View>
                <View style={styles.prcContentSubject}>
                  <Text style={styles.prcContentSubjectText}>english</Text>
                </View>
                <View style={styles.prcContentSubject}>
                  <Text style={styles.prcContentSubjectText}>ELA</Text>
                </View>
              </View>
              <View style={styles.prcContentJoined}>
                <Image
                  style={styles.prcContentJoinedImage}
                  source={require("../../assets/images/image_1.jpg")}
                />
                <Image
                  style={styles.prcContentJoinedImage}
                  source={require("../../assets/images/eclipse-138.png")}
                />
                <Image
                  style={styles.prcContentJoinedImage}
                  source={require("../../assets/images/image_3.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Announcement</Text>
          <Text style={styles.description}>
            Hey ✋, we're a study group dedicated to science in IT industry.
            Feel free to join and learn more about everything!
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Privacy Setting</Text>
          <Text style={styles.description}>Private</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Password Setting</Text>
          <Text style={styles.description}>fre123</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Study Term</Text>
          <Text style={styles.description}>
            Mar 24th, 2022 - Aug 13th, 2022
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Goal</Text>
          <Text style={styles.description}>Learn 5 facts every week</Text>
        </View>
      </View>
      <View style={styles.buttonFrame}>
        <Link href="Explore/createRoomGoalSetting" asChild>
          <Pressable style={styles.backButton}>
            <Text style={styles.backText}>Back</Text>
          </Pressable>
        </Link>
        <CompleteModal />
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: height * (24 / 844),
    marginTop: height * (18 / 844),
    marginHorizontal: width * (24 / 390),
  },
  header: {
    color: "#5D5A6D",
    fontSize: 12,
    fontWeight: "700",
  },
  item: {
    gap: height * (8 / 844),
  },
  prcContents: {
    height: height * (114 / 844),
    paddingHorizontal: width * (16 / 390),
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#FFF",
    gap: width * (12 / 390),
    flexDirection: "row",
  },
  prcImage: {
    width: width * (84 / 390),
    height: height * (81 / 844),
    borderRadius: 16,
  },
  prcContent: {
    gap: height * (8 / 844),
  },
  prcContentHeader: {
    color: "#1E1E25",
    fontSize: 14,
    fontWeight: "700",
  },
  prcContentSubjects: {
    flexDirection: "row",
    gap: width * (6 / 390),
  },
  prcContentSubject: {
    paddingHorizontal: width * (8 / 390),
    paddingVertical: height * (3 / 844),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1E1E25",
  },
  prcContentSubjectText: {
    fontSize: 12,
    fontWeight: "400",
  },
  prcContentJoined: {
    flexDirection: "row",
    gap: width * -(9 / 390),
  },
  prcContentJoinedImage: {
    width: width * (18 / 390),
    height: height * (18 / 844),
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  description: {
    color: "#1E1E25",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonFrame: {
    marginTop: height * (19 / 844),
    gap: width * 0.0512820512820513,
    flexDirection: "row",
    marginBottom: height * (62 / 844),
    marginHorizontal: width * (24 / 390),
  },
  backButton: {
    width: width * 0.4128205128205128,
    height: height * 0.0663507109004739,
    borderRadius: 56,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#5D5A6D",
  },
  backText: {
    color: "#5D5A6D",
    fontSize: 16,
    fontWeight: "700",
  },
});
