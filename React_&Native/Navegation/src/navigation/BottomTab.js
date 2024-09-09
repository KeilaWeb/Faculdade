import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';

export default function BottomTabs() {
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={(HomeScreen)} />
            <Tab.Screen name="About" component={(AboutScreen)} />
        </Tab.Navigator>
    </NavigationContainer>
}


