import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "some restaurant",
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return <Text>Info</Text>;
};
