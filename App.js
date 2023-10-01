import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}></View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
