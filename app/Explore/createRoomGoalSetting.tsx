import { useState } from "react";
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
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateIcon from "../../assets/images/icon-date.svg";

export default function CreateRoomGoalSettingScreen() {
  const [date, setDate] = useState(new Date());
  const [isDate, setIsDate] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    {
      currentDate != date && setDate(currentDate);
      setIsDate(true);
    }
  };

  const showDate = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
      is24Hour: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerMain}>
          <View style={styles.content}>
            <View style={styles.contentItemFrame}>
              <View style={styles.textFrame}>
                <Text style={styles.header}>Study Term</Text>
                <Text style={styles.description}>
                  How long you want to study with others?
                </Text>
              </View>
              <View style={styles.inputDateFrame}>
                <View style={styles.inputDate}>
                  <DateIcon />
                  <Pressable onPress={showDate}>
                    {isDate == false ? (
                      <Text style={styles.dateText}>DD / MM / YYYY</Text>
                    ) : (
                      <Text style={styles.dateText}>
                        {date.toLocaleDateString("en-US")}
                      </Text>
                    )}
                  </Pressable>
                </View>
                <Text style={styles.dash}>-</Text>
                <View style={styles.inputDate}>
                  <DateIcon />
                  <Pressable onPress={showDate}>
                    {isDate == false ? (
                      <Text style={styles.dateText}>DD / MM / YYYY</Text>
                    ) : (
                      <Text style={styles.dateText}>
                        {date.toLocaleDateString("en-US")}
                      </Text>
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.contentItemFrame}>
              <View style={styles.textFrame}>
                <Text style={styles.header}>Group Goal *</Text>
                <Text style={styles.description}>
                  What do you want to achieve?
                </Text>
              </View>
              <TextInput
                style={styles.inputSmall}
                placeholder="Label"
              ></TextInput>
            </View>
            <View></View>
          </View>
          <View style={styles.buttonFrame}>
            <Link href="Explore/createRoomRoomSetting" asChild>
              <Pressable>
                <View style={styles.backButton}>
                  <Text style={styles.backText}>Back</Text>
                </View>
              </Pressable>
            </Link>
            <Link href="Explore/createRoomOverview" asChild>
              <Pressable>
                <View style={styles.nextButton}>
                  <Text style={styles.nextText}>Next</Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerMain: {
    marginHorizontal: width * 0.0615384615384615,
    marginTop: height * (28 / 844),
    marginBottom: height * 0.0734597156398104,
  },
  content: {
    gap: height * 0.028436018957346,
  },
  contentItemFrame: {
    gap: height * 0.009478672985782,
  },
  textFrame: {
    gap: width * 0.0205128205128205,
    flexDirection: "row",
  },
  header: {
    color: "#5D5A6D",
    fontSize: 12.5,
    fontWeight: "700",
  },
  description: {
    color: "#B8BDCC",
    fontSize: 12.5,
    fontWeight: "400",
  },
  inputDateFrame: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: width * 0.0205128205128205,
  },
  inputDate: {
    height: height * 0.0568720379146919,
    width: width * 0.4179487179487179,
    paddingHorizontal: width * 0.041025641025641,
    paddingVertical: height * 0.0059241706161137,
    gap: width * 0.0205128205128205,
    borderRadius: 88,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dash: {
    color: "#1E1E25",
    fontSize: 12.5,
    fontWeight: "700",
  },
  dateText: {
    color: "#B8BDCC",
    fontSize: 12.5,
    fontWeight: "400",
  },
  buttonFrame: {
    marginTop: height * 0.4324644549763033,
    gap: width * 0.0512820512820513,
    flexDirection: "row",
  },
  backButton: {
    width: width * 0.4128205128205128,
    height: height * 0.0663507109004739,
    borderRadius: 56,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#5D5A6D",
  },
  backText: {
    color: "#5D5A6D",
    fontSize: 16,
    fontWeight: "700",
  },
  nextButton: {
    width: width * 0.4128205128205128,
    height: height * 0.0663507109004739,
    borderRadius: 64,
    backgroundColor: "#4A27D5",
    justifyContent: "center",
    alignItems: "center",
  },
  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  inputSmall: {
    paddingHorizontal: width * (16 / 390),
    paddingVertical: height * (16 / 844),
    borderRadius: 48,
    backgroundColor: "#fff",
  },
});
