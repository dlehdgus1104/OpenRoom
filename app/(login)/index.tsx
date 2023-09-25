import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import ShowPassword from "../../assets/images/show-password.svg";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, db } from "../../firebaseConfig";

export default function LoginPageScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        alert("Make sure your username or password is correct");
      });
  };

  useEffect(() => {
    const stateChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        router.push("(tabs)/home");
        console.log("Signed in with " + uid);
      } else {
        // User is signed out
      }
    });
    return stateChange;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OpenRoom</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.inputSmall}
          placeholder="Username"
        />
        <View style={styles.inputSmall}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
          ></TextInput>
          <Pressable>
            <ShowPassword />
          </Pressable>
        </View>
      </View>
      <Pressable onPress={handleSignIn} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Login</Text>
      </Pressable>
      <View style={styles.signUp}>
        <Text style={styles.signUpDesc}>No account yet? </Text>
        <Link href="(login)/signUp" asChild>
          <Pressable>
            <Text style={styles.signUpButton}>Sign up</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingTop: height * (155 / 844),
    paddingBottom: height * (40 / 844),
    paddingHorizontal: width * (24 / 390),
  },
  header: {
    color: "#4A27D5",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
  },
  inputContainer: {
    gap: height * (27 / 844),
    marginTop: height * (116 / 844),
  },
  inputSmall: {
    height: height * 0.0568720379146919,
    paddingHorizontal: width * (24 / 390),
    paddingVertical: height * (5 / 844),
    borderRadius: 88,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nextButton: {
    marginTop: height * (54 / 844),
    marginBottom: height * (247 / 844),
    height: height * 0.0663507109004739,
    paddingHorizontal: width * 0.3871794871794872,
    paddingVertical: height * 0.0213270142180095,
    borderRadius: 59,
    backgroundColor: "#4A27D5",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  signUp: {
    flexDirection: "row",
    alignSelf: "center",
  },
  signUpDesc: {
    color: "#A3A3A3",
    fontSize: 15,
    fontWeight: "500",
  },
  signUpButton: { color: "#9F91F3", fontSize: 15, fontWeight: "500" },
});
