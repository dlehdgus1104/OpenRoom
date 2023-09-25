import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";

export default function UpcomingScheduleEventDetailsScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Image
              style={styles.profilePicture}
              source={require("../../../assets/images/eclipse-29.jpg")}
            />
            <View>
              <Text style={styles.headerName}>Joe McOneil</Text>
              <Text style={styles.headerOrigin}>from French Study 101</Text>
            </View>
          </View>
          <View style={styles.timeAndParticipants}>
            <View style={styles.time}>
              <Text style={styles.timeHeader}>Time</Text>
              <View style={styles.timeContent}>
                <Text style={styles.timeContentText}>Friday @ 5PM</Text>
              </View>
            </View>
            <View style={styles.participants}>
              <Text style={styles.participantsHeader}>Participants</Text>
              <View style={styles.participantsImageFrame}>
                <Image
                  style={styles.participantsImage}
                  source={require("../../../assets/images/eclipse-137.jpg")}
                />
                <Image
                  style={styles.participantsImage}
                  source={require("../../../assets/images/eclipse-138.png")}
                />
                <Image
                  style={styles.participantsImage}
                  source={require("../../../assets/images/eclipse-139.jpg")}
                />
              </View>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionHeader}>Description</Text>
            <View style={styles.descriptionContent}>
              <Text style={styles.descriptionContentText}>
                In this study session we are going to teach the grammer
                component of our French exercise book. Yes it is hard but in
                this study lesson I will tell you guys killer trick on how to
                master grammer. It is only geared towards beginners who just
                started learning french so I hope you guys find my tip useful
                during the study session.
                {"\n"}
                {"\n"}
                {"\n"}Let me know if you want to know something specific about
                grammer beforehand!
              </Text>
            </View>
          </View>
          <Pressable style={styles.attendingButton}>
            <Text style={styles.attendingButtonText}>Attending</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: {
    marginTop: height * 0.0497630331753555,
    marginHorizontal: width * 0.0615384615384615,
    marginBottom: height * 0.1078199052132701,
  },
  attendingButton: {
    display: "flex",
    height: height * 0.0663507109004739,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 71,
    borderWidth: 2,
    borderColor: "#5D5A6D",
  },
  attendingButtonText: {
    color: "#5D5A6D",
    textAlign: "center",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
  },
  header: {
    flexDirection: "row",
    gap: width * 0.0333333333333333,
  },
  profilePicture: {
    width: width * 0.1179487179487179,
    height: height * 0.0545023696682464,
    flexShrink: 0,
    borderRadius: 100000000,
  },
  headerName: {
    color: "#1E1E25",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
  headerOrigin: {
    color: "#1E1E25",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
  },
  timeAndParticipants: {
    flexDirection: "row",
    marginTop: height * 0.028436018957346,
    marginBottom: height * 0.0260663507109005,
  },
  time: {
    gap: height * 0.0082938388625592,
    marginRight: width * 0.1256410256410256,
  },
  timeHeader: {
    color: "#5D5A6D",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
  },
  timeContent: {
    width: width * 0.3128205128205128,
    height: height * 0.0308056872037915,
    borderRadius: 16,
    backgroundColor: "#F5F6FA",
    flexShrink: 0,
    paddingVertical: height * 0.004739336492891,
    paddingLeft: width * 0.0230769230769231,
    paddingRight: width * 0.0769230769230769,
  },
  timeContentText: {
    color: "#1E1E25",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  participants: {
    gap: height * 0.009478672985782,
  },
  participantsHeader: {
    color: "#5D5A6D",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  participantsImageFrame: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-start",
    gap: width * -0.0205128205128205,
  },
  participantsImage: {
    width: width * 0.0615384615384615,
    height: height * 0.028436018957346,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  description: {
    marginBottom: height * 0.1445497630331754,
    gap: height * 0.0106635071090047,
  },
  descriptionHeader: {
    color: "#5D5A6D",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
  },
  descriptionContent: {
    width: width * 0.8769230769230769,
    height: height * 0.3270142180094787,
    borderRadius: 8,
    backgroundColor: "#F6F6FA",
    paddingTop: height * 0.0165876777251185,
    paddingBottom: height * 0.023696682464455,
    paddingLeft: width * 0.0333333333333333,
    paddingRight: width * 0.0487179487179487,
  },
  descriptionContentText: {
    color: "#1E1E25",
    fontSize: 14.5,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
