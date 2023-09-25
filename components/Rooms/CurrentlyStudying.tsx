import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import SoccerPlayer from "../../assets/images/soccer-player.svg";
import BWGirl from "../../assets/images/b&w-girl.svg";
import WalkingMan from "../../assets/images/walking-man.svg";
import WhiteMan from "../../assets/images/white-man.svg";
import SeriousMan from "../../assets/images/serious-man.svg";
import Timer from "../Timer";

export default function CurrentlyStudying() {
  const [time, setTime] = useState(0);
  /* -1 => stopped, 0 => paused, 1 => playing */
  const [status, setStatus] = useState(-1);
  const reset = () => {
    setTime(0);
  };
  useEffect(() => {
    let timerID;
    if (status === 1) {
      timerID = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(timerID);
      if (status === -1) reset();
    }
    return () => {
      clearInterval(timerID);
    };
  }, [status]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currently Studyig</Text>
      <View style={styles.rowFrame1}>
        <View style={styles.item}>
          <SoccerPlayer />
          <Text style={styles.itemText}>Dilan W.</Text>
          <View style={styles.itemTimer}>
            <Timer time={time} />
          </View>
        </View>
        <View style={styles.item}>
          <BWGirl />
          <Text style={styles.itemText}>Dilan W.</Text>
          <View style={styles.itemTimer}>
            <Timer time={time} />
          </View>
        </View>
        <View style={styles.item}>
          <WalkingMan />
          <Text style={styles.itemText}>Dilan W.</Text>
          <View style={styles.itemTimer}>
            <Timer time={time} />
          </View>
        </View>
      </View>
      <View style={styles.rowFrame1}>
        <View style={styles.item}>
          <WhiteMan />
          <Text style={styles.itemText}>Dilan W.</Text>
          <View style={styles.itemTimer}>
            <Timer time={time} />
          </View>
        </View>
        <View style={styles.item}>
          <SeriousMan />
          <Text style={styles.itemText}>Dilan W.</Text>
          <View style={styles.itemTimer}>
            <Timer time={time} />
          </View>
        </View>
      </View>
    </View>
  );
}

// style={styles.}
// :{},

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemTimerText: {
    color: "#1E1E25",
    fontSize: 14,
    fontWeight: "700",
  },
  itemTimer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    height: height * (30 / 844),
    width: width * (87 / 390),
  },
  itemText: {
    fontSize: 12,
    fontWeight: "400",
  },
  item: {
    paddingVertical: height * (16 / 844),
    alignItems: "center",
    gap: height * (8 / 844),
    borderRadius: 16,
    backgroundColor: "#F6F6FA",
    width: width * (109 / 390),
  },
  rowFrame1: {
    gap: width * (8 / 390),
    flexDirection: "row",
  },
  header: {
    color: "#1E1E25",
    fontSize: 16,
    fontWeight: "700",
  },
  container: {
    gap: height * (8 / 844),
  },
});
