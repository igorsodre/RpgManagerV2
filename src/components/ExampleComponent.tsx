import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ExampleComponentProps {
	dummyProp: string;
}
const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
	return (
		<View style={styles.container}>
			<Text>ExampleComponent - {props.dummyProp}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});

export default ExampleComponent;
