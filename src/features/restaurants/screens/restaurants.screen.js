import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
    // backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
