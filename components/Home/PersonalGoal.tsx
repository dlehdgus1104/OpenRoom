import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";

export default function PersonalGoal() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Personal Goal</Text>
        <Pressable>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.mainContentSubFrame}>
          <View>
            <Text style={styles.descriptionText1}>
              This is your goal today!
            </Text>
            <Text style={styles.descriptionText2}>Study an hour everyday</Text>
          </View>
          <Pressable style={styles.clickToCompleteButtonFrame}>
            <Text style={styles.clickToCompleteButtonText}>
              Click to complete
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.carouselDot}>
        <Image source={require("../../assets/images/carouselDot.png")} />
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.0260663507109005,
    marginRight: width * (24 / 390),
  },
  headerContainer: {
    display: "flex",
    width: "auto",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  header: {
    color: "#1E1E25",
    fontSize: 15 /* 16px */,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: height * 0.0227488151658768 /* 19.2px */,
  },
  addButtonText: {
    color: "#5D5A6D",
    fontSize: 13 /* 14px */,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.021563981042654 /* 18.2px */,
  },
  mainContent: {
    backgroundColor: "#E8E5FD",
    marginVertical: height * 0.009478672985782,
    borderRadius: 11,
  },
  mainContentSubFrame: {
    display: "flex",
    alignItems: "center",
    marginVertical: height * 0.0213270142180095,
    marginHorizontal: width * 0.0487179487179487,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  descriptionText1: {
    color: "#1E1E25",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076 /* 14.4px */,
  },
  descriptionText2: {
    color: "#1E1E25",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: height * 0.0199052132701422 /* 16.8px */,
  },
  clickToCompleteButtonFrame: {
    display: "flex",
    height: height * 0.033175355450237,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E25",
    borderRadius: 64,
    paddingHorizontal: width * 0.0256410256410256,
    paddingVertical: height * 0.0071090047393365,
  },
  clickToCompleteButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: height * 0.0170616113744076,
  },
  carouselDot: {
    display: "flex",
    alignItems: "center",
  },
});
