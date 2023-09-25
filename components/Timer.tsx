import { Text, StyleSheet, View } from "react-native";

export default function Timer({ time }) {
  const transformHours = () => {
    const convertedValue = Math.floor((time / 36000) % 60);
    const formattedValue = ("0" + convertedValue).slice(-2);
    return formattedValue;
  };
  const transformMinutes = () => {
    const convertedValue = Math.floor((time / 6000) % 60);
    const formattedValue = ("0" + convertedValue).slice(-2);
    return formattedValue;
  };
  const transformSeconds = () => {
    const convertedValue = Math.floor((time / 100) % 100);
    const formattedValue = ("0" + convertedValue).slice(-2);
    return formattedValue;
  };
  return (
    <Text style={styles.time}>
      {transformHours()}:{transformMinutes()}:{transformSeconds()}
    </Text>
  );
}
const styles = StyleSheet.create({
  time: {
    color: "#1E1E25",
    fontSize: 14,
    fontWeight: "700",
  },
});
