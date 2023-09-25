import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import Categories from "@/components/Rooms/Categories";
import Announcements from "@/components/Rooms/Announcements";
import GroupGoal from "@/components/Rooms/GroupGoal";
import CurrentlyStudying from "@/components/Rooms/CurrentlyStudying";

export default function SelectedRoomScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Categories />
        <Announcements />
        <GroupGoal />
        <CurrentlyStudying />
      </View>
    </ScrollView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * (24 / 390),
    paddingTop: height * (10 / 844),
    gap: height * (25 / 844),
  },
});
