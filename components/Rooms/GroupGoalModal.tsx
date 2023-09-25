import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  Alert,
  Modal,
  Image,
} from "react-native";
import QuestionMark from "../../assets/images/question-mark-icon.svg";
import BlueTriangle from "../../assets/images/blue-triangle.svg";
import XIcon from "../../assets/images/x-icon.svg";

export default function GroupGoalModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <BlueTriangle style={styles.icon} />
          <View style={styles.modalView}>
            <Pressable
              style={styles.xIcon}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <XIcon />
            </Pressable>
            <Text style={styles.headerText}>Group Goal</Text>
            <Text style={styles.modalText}>
              This is a common goal set by the group for individual members to
              complete on their own. Once a goal is completed, it will appear on
              member profile.
            </Text>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <QuestionMark />
      </Pressable>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    marginTop: height * (485 / 844),
  },
  modalView: {
    paddingLeft: width * (34 / 390),
    paddingRight: width * (29 / 390),
    paddingTop: height * (16 / 844),
    paddingBottom: height * (27 / 844),
    marginHorizontal: width * (24 / 390),
    backgroundColor: "#4A27D5",
    borderRadius: 14,
    gap: height * (6 / 844),
  },
  headerText: {
    color: "#FFF",
    fontSize: 19,
    fontWeight: "700",
    lineHeight: height * (22.8 / 844),
  },
  modalText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: height * (22.4 / 844),
  },
  icon: {
    paddingLeft: width * (235 / 390),
  },
  xIcon: {
    alignItems: "flex-end",
  },
});
