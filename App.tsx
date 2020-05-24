import React from 'react';
import { YellowBox } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
// import firebase from 'firebase';
import { store } from './src/data';
import AppNavigator from './src/navigation';

enableScreens();

YellowBox.ignoreWarnings(['Setting a timer']);

export default function App() {
	// if (!firebase.apps.length) {
	// 	try {
	// 		firebase.initializeApp(credentials);
	// 	} catch (err) {
	// 		console.log(err.message);
	// 	}
	// }

	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
}
