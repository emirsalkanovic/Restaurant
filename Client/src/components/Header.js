import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLOR_FONT_BLACK, COLOR_PRIMARY_WHITE } from '../assets/colors/colors';
// import { FONT_AVENIR_MEDIUM } from '../assets/fonts/fonts';

//Header bar for top navigation
const Header = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}> {props.title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 50,
		backgroundColor: COLOR_PRIMARY_WHITE,
		justifyContent: 'center'
	},
	title: {
		marginLeft: '1%',
		// fontFamily: FONT_AVENIR_MEDIUM,
		fontSize: 22,
		color: COLOR_FONT_BLACK,
		fontWeight: 'bold'
	}
});

export default Header;