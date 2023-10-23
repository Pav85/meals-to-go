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
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
};
const Map = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
              >
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
          </RestaurantsContextProvider>
        </LocationContextProvider>
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
