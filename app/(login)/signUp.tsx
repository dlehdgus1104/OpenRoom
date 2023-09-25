import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head}>Let's sign up!</Text>
        <View style={styles.content}>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemHead}>What's your name? *</Text>
            <View style={styles.contentItemInput}>
              <TextInput
                style={styles.contentItemInputText}
                placeholder="Full name"
                onChangeText={(text) => setName(text)}
              />
            </View>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemHead}>
              What's your email address? *
            </Text>
            <View style={styles.contentItemInput}>
              <TextInput
                style={styles.contentItemInputText}
                placeholder="Email address"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemHead}>Username *</Text>
            <View style={styles.contentItemInput}>
              <TextInput
                style={styles.contentItemInputText}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
              />
            </View>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemHead}>Password *</Text>
            <View style={styles.contentItemInput}>
              <TextInput
                style={styles.contentItemInputText}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemHead}>Re-Password *</Text>
            <View style={styles.contentItemInput}>
              <TextInput
                style={styles.contentItemInputText}
                placeholder="Confirm password"
              />
            </View>
          </View>
          <Pressable onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

//   :{},
//   width*(/390)
//   height*(/844)

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  button: {
    height: height * (56 / 844),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 59,
    backgroundColor: "#4A27D5",
    marginTop: height * (17 / 844),
  },
  contentItemInputText: {
    color: "#B8BDCC",
    fontSize: 14,
    fontWeight: "400",
  },
  contentItemInput: {
    paddingHorizontal: width * (16 / 390),
    paddingVertical: height * (16 / 844),
    borderRadius: 48,
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  contentItemHead: {
    color: "#5D5A6D",
    fontSize: 14,
    fontWeight: "700",
  },
  contentItem: {
    gap: height * (8 / 844),
  },
  content: {
    paddingBottom: height * (76 / 844),
    paddingHorizontal: width * (24 / 390),
    paddingTop: height * (27 / 844),
    gap: height * (21 / 844),
  },
  head: {
    color: "#4A27D5",
    fontSize: 28,
    fontWeight: "700",
    paddingHorizontal: width * (24 / 390),
    backgroundColor: "#FFF",
    paddingTop: height * (25 / 844),
    paddingBottom: height * (45 / 844),
  },
  container: {
    backgroundColor: "#F6F6FA",
  },
});
