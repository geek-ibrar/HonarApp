import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/Home';
import MyCoursesScreen from '../screens/Home/MyCourses';
import MyAccountScreen from '../screens/Home/MyAccount';
import { Color } from '../common/Theme';

interface TabsNavigatorProps { }

const Tab = createBottomTabNavigator();
const TabsNavigator = (props: TabsNavigatorProps) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {

                    // return tab icons
                    if (route.name === 'HomeTab') {
                        return <Ionicons name="md-home-outline" size={size} color={color} />
                    } else if (route.name === 'MyCoursesTab') {
                        return <Ionicons name="md-book-outline" size={size} color={color} />
                    }
                    else {
                        return <Ionicons name="md-person-outline" size={size} color={color} />
                    }
                },
                tabBarLabel: ({ focused, color, position }) => {
                    if (route.name === 'HomeTab') {
                        return <Text style={[styles.tabTitle, { color: color }]}>Home</Text>
                    } else if (route.name === 'MyCoursesTab') {
                        return <Text style={[styles.tabTitle, { color: color }]}>My Courses</Text>
                    }
                    else {
                        return <Text style={[styles.tabTitle, { color: color }]}>My Account</Text>
                    }
                },
                headerShown: false,
                gestureEnabled: true,
                tabBarActiveTintColor: Color.Accent,
                tabBarInactiveTintColor: "black",
            })
            }
        >
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="MyCoursesTab" component={MyCoursesScreen} />
            <Tab.Screen name="MyAccountTab" component={MyAccountScreen} />
        </Tab.Navigator>
    );
};

export default TabsNavigator;

const styles = StyleSheet.create({
    tabTitle: {
        fontWeight: '700',
        fontSize: 13
    }
});
