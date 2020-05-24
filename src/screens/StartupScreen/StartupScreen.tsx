import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { INavigationOptions, INavigatorProp } from '../../typings';

type StartupScreenRouteParams = {};
type StartupScreenScreenProps = INavigatorProp<{}, StartupScreenRouteParams>;
const StartupScreenScreen: React.FC<StartupScreenScreenProps> = (props) => {
	props.navigation.setOptions(
		screenOptions({
			headerLeft: () => <CustomButton iconName="md-menu" onPress={() => props.navigation.toggleDrawer()} />,
		}),
	);

	return (
		<View style={styles.container}>
			<Text>StartupScreen</Text>
		</View>
	);
};

const screenOptions = (optional: Partial<INavigationOptions> = {}): INavigationOptions => {
	return {
		...{
			title: 'Welcome',
		},
		...optional,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
});

export default StartupScreenScreen;
