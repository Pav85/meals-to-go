import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </View>
  );
}
// might have to wrap everything in <></> tag because of the <StatusBar style="auto" /> element

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});
