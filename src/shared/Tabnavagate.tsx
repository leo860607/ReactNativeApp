
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomePage from "../feature/HomePage";
import SettingPage from "../feature/SettingPage";
import { Platform } from 'react-native';
import DetailStack from "./DetailStack";





console.log(Platform.OS) // 'ios','android'


const routes = [
    {
        name: 'Home',
        id: 'Home',
        icon: {
            ios: 'ios-home',
            android: 'home',
        },
        component: <HomePage />,
    },
    {
        name: 'setting',
        id: 'setting',
        icon: {
            ios: 'ios-settings',
            android: 'settings'
        },
        component: <DetailStack />,
    }
];


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = "ios-list";
                        routes.some(x => {
                            if (route.name === x.name) {
                                iconName = focused
                                    ? x.icon[Platform.OS === 'ios' ? 'ios' : 'android']
                                    : `${x.icon[Platform.OS === 'ios' ? 'ios' : 'android']}-outline`;
                                return true;
                            }
                        })
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                {routes.map((route) => {
                    const EachScene = () => route.component;
                    return (
                        <Tab.Screen
                            name={route.name}
                            component={EachScene}
                            key={route.id}
                            options={{ headerShown: false }}
                        />
                    );
                })}
                {/* <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Settings" component={SettingPage} /> */}

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;