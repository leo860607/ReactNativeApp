import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../feature/DetailPage';
import SettingPage from '../feature/SettingPage';

const Stack = createStackNavigator();

function DetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingPage} />
      <Stack.Screen name="detail" component={DetailPage} />
    </Stack.Navigator>
  );
}

export default DetailStack;