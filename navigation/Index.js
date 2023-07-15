import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import Game from "../screens/Game";
import Result from "../screens/Result";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
