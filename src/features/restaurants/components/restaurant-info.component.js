import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg",
    ],
    address = "100 random street",
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return <Text>Info</Text>;
};
