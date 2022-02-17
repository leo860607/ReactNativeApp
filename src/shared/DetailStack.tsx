import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../feature/DetailPage';
import SettingPage from '../feature/SettingPage';
import HomePage from "../feature/HomePage";

const Stack = createStackNavigator();

function DetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="detail" component={DetailPage} options={{ title: "詳情" }}/>
    </Stack.Navigator>
  );
}

export default DetailStack;