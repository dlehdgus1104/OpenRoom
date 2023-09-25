import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";

import SearchBar from "@/components/Explore/SearchBar";
import PopularRooms from "@/components/Explore/PopularRooms";
import PickedJustForYou from "@/components/Explore/PickedJustForYou";
import CreateRoom from "@/components/Explore/CreateRoom";
import MoreRoomsForYou from "@/components/Explore/MoreRoomsForYou";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <SearchBar></SearchBar>
        </View>
        <View style={styles.containerMain}>
          <PopularRooms></PopularRooms>
          <PickedJustForYou></PickedJustForYou>
          <CreateRoom></CreateRoom>
          <MoreRoomsForYou></MoreRoomsForYou>
        </View>
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: {
    marginLeft: width * 0.0615384615384615,
    marginTop: height * 0.037914691943128,
    marginBottom: height * 0.0521327014218009,
    gap: height * 0.028436018957346,
  },
  searchContainer: {
    marginLeft: width * 0.0615384615384615,
    marginTop: height * 0.018957345971564,
  },
});
