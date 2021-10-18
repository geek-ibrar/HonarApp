import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import PlayerScreen from '../screens/Player';


const Stack = createNativeStackNavigator();
interface NavigationProps { }

const noHeader = {
    headerShown: false,
    gestureEnabled: true,
};
const Navigation = (props: NavigationProps) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={noHeader} initialRouteName="Home">
                <Stack.Screen name="Home" component={TabsNavigator} />
                <Stack.Screen name="Player" component={PlayerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

