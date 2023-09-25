import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";

import LoginPageScreen from ".";

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
