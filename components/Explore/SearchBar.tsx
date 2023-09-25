import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import SearchIcon from "../../assets/images/search-icon.svg";
import FilterIcon from "../../assets/images/filter-icon.svg";

export default function SearchBar() {
  return (
    <View style={styles.content}>
      <View style={styles.searchFrame}>
        <SearchIcon />
      </View>
      <FilterIcon />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    display: "flex",
    alignItems: "center",
    gap: width * 0.041025641025641,
    flexDirection: "row",
  },
  searchFrame: {
    borderRadius: 28,
    backgroundColor: "#F6F6FA",
    width: width * 0.7615384615384615,
    height: height * 0.037914691943128,
    paddingVertical: height * 0.004739336492891,
    paddingLeft: width * 0.0307692307692308,
  },
});
