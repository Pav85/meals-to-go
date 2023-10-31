import react from "react";
import { CreateStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = CreateStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
