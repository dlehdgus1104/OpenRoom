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
import InstagramIcon from "../../assets/images/instagram-icon.svg";
import FaceBookIcon from "../../assets/images/facebook-icon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";

export default function CompleteModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.contentFrame}>
              <Image
                style={styles.checkButtonImage}
                source={require("../../assets/images/check-tick.gif")}
              />
              <View style={styles.textAndIcons}>
                <Text style={styles.modalText}>
                  You've opened a room!
                  {"\n"}
                  Show your room to your friends!
                </Text>
                <View style={styles.icons}>
                  <TwitterIcon style={styles.icon} />
                  <FaceBookIcon />
                  <InstagramIcon />
                </View>
              </View>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Not now</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.nextButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.nextText}>Next</Text>
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
    marginTop: height * (214 / 844),
  },
  modalView: {
    paddingVertical: height * (32 / 844),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: height * (32 / 844),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: height * (32 / 844),
  },
  button: {
    width: width * (161 / 390),
    height: height * (56 / 844),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
    backgroundColor: "#1E1E25",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  contentFrame: {
    gap: height * (8 / 844),
    alignItems: "center",
  },
  modalText: {
    color: "#1E1E25",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: height * (22.8 / 844),
  },
  checkButtonImage: {
    width: width * (86 / 390),
    height: height * (86 / 844),
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
  textAndIcons: {
    gap: height * (16 / 844),
    alignItems: "center",
  },
  icons: {
    gap: width * (13 / 390),
    flexDirection: "row",
  },
  icon: {
    width: width * (28 / 390),
    height: height * (28 / 844),
  },
});
