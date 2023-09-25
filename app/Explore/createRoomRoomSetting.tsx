import React, { useState } from "react";
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

export default function CreateRoomRoomSettingScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputText, setInputText] = useState("");

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerMain}>
          {/* rcp = Room Cover Photo */}
          <View style={styles.rcpContainer}>
            <Text style={styles.header}>Room Cover Photo*</Text>
            <View style={styles.rcpContent}>
              <ScrollView nestedScrollEnabled={true}>
                <View style={styles.rcpImageContainer}>
                  <View style={styles.rcpContentSub}>
                    <Image
                      source={require("../../assets/images/image-8.png")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-14.png")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-17.jpeg")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-11.png")}
                      style={styles.rcpImage}
                    />
                  </View>
                  <View style={styles.rcpContentSub}>
                    <Image
                      source={require("../../assets/images/image-18.jpg")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-13.jpeg")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-16.png")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-10.jpeg")}
                      style={styles.rcpImage}
                    />
                  </View>
                  <View style={styles.rcpContentSub}>
                    <Image
                      source={require("../../assets/images/image-19.jpeg")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-12.jpeg")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-15.jpeg")}
                      style={styles.rcpImage}
                    />
                    <Image
                      source={require("../../assets/images/image-9.jpeg")}
                      style={styles.rcpImage}
                    />
                  </View>
                </View>
              </ScrollView>
              <View style={styles.scrollBar}></View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Room Title*</Text>
            <TextInput style={styles.inputSmall} placeholder="Room Title" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Announcement*</Text>
            <TextInput
              style={styles.inputLarge}
              placeholder="Description"
              onChangeText={(value) => setInputText(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Tags*</Text>
            <TextInput style={styles.inputSmall} placeholder="Add the tags" />
          </View>
          <View style={styles.pvstContainer}>
            <Text style={styles.header}>Private Setting</Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              thumbColor={isEnabled ? "#fff" : "#fff"}
              trackColor={{ true: "#4A27D5", false: "#B8BDCC" }}
            />
          </View>
          {isEnabled && (
            <View style={styles.inputContainer}>
              <Text style={styles.header}>Password</Text>
              <TextInput
                style={styles.inputSmall}
                placeholder="Type the password"
              />
            </View>
          )}
        </View>
        <Link href="Explore/createRoomGoalSetting" asChild>
          <Pressable style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </Link>
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
    marginTop: height * 0.033175355450237,
    marginBottom: height * 0.0900473933649289,
    marginHorizontal: width * 0.0615384615384615,
    gap: height * 0.018957345971564,
  },
  rcpContainer: {
    gap: height * 0.009478672985782,
  },
  header: {
    color: "#5D5A6D",
    fontSize: 14,
    fontWeight: "700",
  },
  rcpContent: {
    height: height * 0.2677725118483412,
    gap: width * 0.0205128205128205,
    paddingHorizontal: width * 0.041025641025641,
    paddingTop: height * 0.018957345971564,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
  },
  rcpImageContainer: {
    gap: width * 0.0205128205128205,
  },
  rcpContentSub: {
    gap: width * 0.0205128205128205,
    flexDirection: "row",
  },
  rcpImage: {
    width: width * 0.1751282051282051,
    height: height * 0.0888625592417062,
    borderRadius: 8,
  },
  scrollBar: {
    width: width * 0.0128205128205128,
    height: height * 0.0627962085308057,
    borderRadius: 32,
    backgroundColor: "#B8BDCC",
  },
  inputContainer: {
    gap: height * 0.009478672985782,
  },
  inputSmall: {
    height: height * 0.0568720379146919,
    paddingHorizontal: width * 0.0615384615384615,
    paddingVertical: height * 0.0059241706161137,
    borderRadius: 88,
    backgroundColor: "#fff",
  },
  inputLarge: {
    height: height * 0.1232227488151659,
    paddingHorizontal: width * 0.041025641025641,
    paddingVertical: height * 0.018957345971564,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  // inputText: {
  //   color: "#B8BDCC",
  //   fontSize: 14,
  //   fontWeight: "400",
  // },
  pvstContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nextButton: {
    marginBottom: height * 0.0355450236966825,
    height: height * 0.0663507109004739,
    paddingHorizontal: width * 0.3871794871794872,
    paddingVertical: height * 0.0213270142180095,
    marginHorizontal: width * 0.0615384615384615,
    borderRadius: 59,
    backgroundColor: "#4A27D5",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
