import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import CommentsScreen from '../screens/commentsScreen/commentsScreen';

export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()

    return <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={(HomeScreen)} />
            <Drawer.Screen name="About" component={(AboutScreen)} />
            <Drawer.Screen name="Comment" component={(CommentsScreen)} />
        </Drawer.Navigator>
    </NavigationContainer>
}