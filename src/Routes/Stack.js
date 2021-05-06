import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Wallet from "../Pages/Wallet";

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="wallet" component={Wallet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
