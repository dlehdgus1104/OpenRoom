import { StyleSheet, Dimensions } from "react-native";
import { View } from "@/components/Themed";

import PersonalGoal from "@/components/Home/PersonalGoal";
import UpcomingSchedule from "@/components/Home/UpcomingSchedule";
import JoinedRooms from "@/components/Home/JoinedRooms";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PersonalGoal></PersonalGoal>
      <UpcomingSchedule></UpcomingSchedule>
      <JoinedRooms></JoinedRooms>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: width * (24 / 390),
  },
});
