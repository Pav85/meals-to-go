import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <View style={styles.topContainer}>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </View>
  );
}
// might have to wrap everything in <></> tag because of the <StatusBar style="auto" /> element

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    // backgroundColor: "yellow",
  },
});
