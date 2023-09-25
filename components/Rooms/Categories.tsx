import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import ScheduleIcon from "../../assets/images/schedule-icon.svg";
import AttendanceIcon from "../../assets/images/attendance-icon.svg";
import MembersIcon from "../../assets/images/members-icon.svg";
import BoardIcon from "../../assets/images/board-icon.svg";
import ChatIcon from "../../assets/images/chat-icon.svg";
import StopwatchIcon from "../../assets/images/stopwatch-icon.svg";

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <View style={styles.content}>
        <View style={styles.rowFrame}>
          <Link href="Rooms/schedule" asChild>
            <Pressable>
              <View style={styles.iconFrame1}>
                <View style={styles.iconContent}>
                  <ScheduleIcon />
                  <Text style={styles.contentText}>Schedule</Text>
                </View>
              </View>
            </Pressable>
          </Link>
          <Link href="Rooms/attendance" asChild>
            <Pressable>
              <View style={styles.iconFrame2}>
                <View style={styles.iconContent}>
                  <AttendanceIcon />
                  <Text style={styles.contentText}>Attendance</Text>
                </View>
              </View>
            </Pressable>
          </Link>
          <Link href="Rooms/members" asChild>
            <Pressable>
              <View style={styles.iconFrame3}>
                <View style={styles.iconContent}>
                  <MembersIcon />
                  <Text style={styles.contentText}>Members</Text>
                </View>
              </View>
            </Pressable>
          </Link>
        </View>
        <View style={styles.rowFrame}>
          <Link href="Rooms/questionBoard" asChild>
            <Pressable>
              <View style={styles.iconFrame4}>
                <View style={styles.iconContent}>
                  <BoardIcon />
                  <Text style={styles.contentText}>Board</Text>
                </View>
              </View>
            </Pressable>
          </Link>
          <View style={styles.iconFrame5}>
            <View style={styles.iconContent}>
              <ChatIcon />
              <Text style={styles.contentText}>Chat</Text>
            </View>
          </View>
          <View style={styles.iconFrame6}>
            <View style={styles.iconContent}>
              <StopwatchIcon />
              <Text style={styles.contentText}>Stopwatch</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowFrame}></View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    gap: height * (8 / 844),
  },
  header: {
    color: "#1E1E25",
    fontSize: 16,
    fontWeight: "700",
  },
  content: {
    gap: height * (15 / 844),
  },
  rowFrame: {
    gap: width * (16 / 390),
    flexDirection: "row",
  },
  iconFrame1: {
    width: width * (103 / 390),
    height: height * (103 / 844),
    borderRadius: 16,
    backgroundColor: "#E8E5FD",
    justifyContent: "center",
    alignItems: "center",
  },
  iconFrame2: {
    width: width * (103 / 390),
    height: height * (103 / 844),
    borderRadius: 16,
    backgroundColor: "#F0F4FF",
    justifyContent: "center",
    alignItems: "center",
  },
  iconFrame3: {
    width: width * (103 / 390),
    height: height * (103 / 844),
    borderRadius: 16,
    backgroundColor: "#FAE8DD",
    justifyContent: "center",
    alignItems: "center",
  },
  iconFrame4: {
    width: width * (103 / 390),
    height: height * (103 / 844),
    borderRadius: 16,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
  },
  iconFrame5: {
    width: width * (103 / 390),
    height: height * (103 / 844),
    borderRadius: 16,
    backgroundColor: "#F0E8F4",
    justifyContent: "center",
    alignItems: "center",
  },
  iconFrame6: {
    width: width * (103 / 390),
    height: height * (103 / 844),
    borderRadius: 16,
    backgroundColor: "#FFF3F9",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContent: {
    gap: height * (5 / 844),
    width: width * (64 / 390),
    height: height * (59 / 844),
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    color: "#1E1E25",
    fontSize: 12,
    fontWeight: "700",
  },
});
