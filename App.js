import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const Settings = () => {
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>;
};

const Map = () => {
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>;
};

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
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantScreen}
              options={{ unmountOnBlur: true, headerShown: false }}
            ></Tab.Screen>
            <Tab.Screen
              name="Map"
              component={Map}
              options={{ unmountOnBlur: true, headerShown: false }}
            ></Tab.Screen>
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{ unmountOnBlur: true, headerShown: false }}
            ></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
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
