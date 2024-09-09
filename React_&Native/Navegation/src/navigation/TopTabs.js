import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';

export default function TopTabs() {
    const Tab = createMaterialTopTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={(HomeScreen)} />
            <Tab.Screen name="About" component={(AboutScreen)} />
        </Tab.Navigator>
    </NavigationContainer>
}