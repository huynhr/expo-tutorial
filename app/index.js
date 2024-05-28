import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Link, useNavigation } from "expo-router";

export default function Page() {
  const navigation = useNavigation();

  useEffect(() => {
    // navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>Home Page</Text>
        <Link href="picture">picture</Link>
        <Link href="picture">about</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  navigation: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "100px",
    height: "50px",
    width: "100%",
  },
});
