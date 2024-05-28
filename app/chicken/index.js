import { View, Text, StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function Chicken() {
  return (
    <View styles={styles.container}>
      <Text>Chicken</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "200px",
    width: "100%",
    backgroundColor: "#25292e",
  },
});
