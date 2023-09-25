import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import ArrowDown from "../../assets/images/arrow-down.svg";
import SmileyFace from "../../assets/images/smiley-face.svg";
import SadFace from "../../assets/images/sad-face.svg";

export default function AttendanceScreen() {
  const loopDates1 = [1, 2, 3, 4, 5, 6, 7];
  const loopDates2 = [8, 9, 10, 11, 12, 13, 14];
  const loopDates3 = [15, 16, 17, 18, 19, 20, 21];
  const loopDates4 = [22, 23, 24, 25, 26, 27, 28];
  const loopDates5 = [29, 30, 31];

  return (
    <View style={styles.container}>
      <Text style={styles.descriptionTop}>
        If you want to check the attendance, start the timer.
      </Text>
      <View style={styles.calendar}>
        <View style={styles.calendarHead}>
          <View style={styles.calendarHeadFrame}>
            <Text>September</Text>
            <ArrowDown />
          </View>
          <View style={styles.calendarHeadFrame}>
            <Text>2022</Text>
            <ArrowDown />
          </View>
        </View>
        <View style={styles.calendarDays}>
          <Text style={styles.calendarDaysText}>SU</Text>
          <Text style={styles.calendarDaysText}>MO</Text>
          <Text style={styles.calendarDaysText}>TU</Text>
          <Text style={styles.calendarDaysText}>WE</Text>
          <Text style={styles.calendarDaysText}>TH</Text>
          <Text style={styles.calendarDaysText}>FR</Text>
          <Text style={styles.calendarDaysText}>SA</Text>
        </View>
        <View style={styles.calendarDates}>
          {loopDates1.map((number) => (
            <View style={styles.calendarDatesFrame}>
              <Text style={styles.calendarDatesFrameText} key={number.id}>
                {number}
              </Text>
              <SmileyFace />
            </View>
          ))}
        </View>
        <View style={styles.calendarDates}>
          {loopDates2.map((number) => (
            <View style={styles.calendarDatesFrame}>
              <Text style={styles.calendarDatesFrameText} key={number.id}>
                {number}
              </Text>
              <SmileyFace />
            </View>
          ))}
        </View>
        <View style={styles.calendarDates}>
          {loopDates3.map((number) => (
            <View style={styles.calendarDatesFrame}>
              <Text style={styles.calendarDatesFrameText} key={number.id}>
                {number}
              </Text>
              <SmileyFace />
            </View>
          ))}
        </View>
        <View style={styles.calendarDates}>
          {loopDates4.map((number) => (
            <View style={styles.calendarDatesFrame}>
              <Text style={styles.calendarDatesFrameText} key={number.id}>
                {number}
              </Text>
              <SmileyFace />
            </View>
          ))}
        </View>
        <View style={styles.calendarDates}>
          {loopDates5.map((number) => (
            <View style={styles.calendarDatesFrame}>
              <Text style={styles.calendarDatesFrameText} key={number.id}>
                {number}
              </Text>
              <SmileyFace />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.goStudy}>
        <Text style={styles.goStudyHead}>Have you studied today?</Text>
        <Link href="">
          <Pressable>
            <View style={styles.goStudyButton}>
              <Text style={styles.goStudyButtonText}>Go Study</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

// :{},

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  goStudyHead: {
    color: "#1E1E25",
    fontSize: 16,
    fontWeight: "700",
  },
  goStudyButton: {
    borderRadius: 64,
    backgroundColor: "#4A27D5",
    width: width * (119 / 390),
    height: height * (39 / 844),
    justifyContent: "center",
    alignItems: "center",
  },
  goStudyButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "700",
  },
  calendarDatesFrameText: {
    color: "#5D5A6D",
    fontSize: 12,
    fontWeight: "400",
  },
  calendarDatesFrame: {
    gap: width * (6 / 390),
    alignItems: "center",
  },
  calendarDates: {
    paddingHorizontal: width * (16 / 390),
    paddingVertical: height * (8 / 844),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  calendarDaysText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "400",
  },
  calendarDays: {
    paddingHorizontal: width * (16 / 390),
    paddingVertical: height * (8 / 844),
    borderRadius: 24,
    backgroundColor: "#5D5A6D",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  calendarHeadFrame: {
    flexDirection: "row",
    gap: width * (8 / 390),
  },
  calendarHead: {
    gap: width * (24 / 390),
    flexDirection: "row",
  },
  goStudy: {
    paddingHorizontal: width * (24 / 390),
    paddingVertical: height * (24 / 844),
    borderRadius: 16,
    backgroundColor: "#E8E5FD",
    marginTop: height * (18 / 844),
    gap: height * (16 / 844),
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    paddingHorizontal: width * (16 / 390),
    paddingVertical: height * (16 / 844),
    gap: height * (8 / 844),
    borderRadius: 16,
    backgroundColor: "#F6F6FA",
  },
  descriptionTop: {
    color: "#B8BDCC",
    fontSize: 12,
    fontWeight: "500",
  },
  container: {
    paddingHorizontal: width * (24 / 390),
    paddingBottom: height * (95 / 844),
    paddingTop: height * (12 / 844),
  },
});
