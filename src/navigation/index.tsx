import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from '../constants';
import StartupScreen from '../screens/StartupScreen';
import { INavigationOptions } from '../typings';

const defaultNavigationOptions: INavigationOptions = {
	headerStyle: {
		backgroundColor: Colors.primary,
	},
	headerTintColor: 'white',
};
const Stack = createStackNavigator();

const AppStackNavigator = () => (
	<Stack.Navigator screenOptions={defaultNavigationOptions}>
		<Stack.Screen name="StartupScreen" component={StartupScreen} />
	</Stack.Navigator>
);

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => (
	<Drawer.Navigator drawerType="front">
		<Drawer.Screen name="Startup" component={AppStackNavigator} options={{}} />
	</Drawer.Navigator>
);

export default () => (
	<NavigationContainer>
		<AppDrawerNavigator />
	</NavigationContainer>
);
