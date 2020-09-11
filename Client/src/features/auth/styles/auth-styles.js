import { StyleSheet } from 'react-native';
import {
	COLOR_PRIMARY_WHITE,
	COLOR_LANDING_GRAY,
	COLOR_FONT_BLACK,
	COLOR_FONT_LIGHT_BLACK,
	COLOR_PRIMARY_ERROR_RED,
	COLOR_PRIMARY_PURPLE
} from '../../../assets/colors/colors';

export default StyleSheet.create({

	//SignIn Screen
	containerSignIn: {
		flex: 1,
		backgroundColor: COLOR_PRIMARY_WHITE
	},

	radioButtonsContainer: {
		width: '100%',
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},

	radioButtonSingleContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	radioButtonText: {
		color: COLOR_FONT_LIGHT_BLACK,
		marginTop: 5,
		fontWeight: 'bold'
	},

	radioButtonTextActive: {
		color: COLOR_PRIMARY_PURPLE,
		marginTop: 5,
		fontWeight: 'bold'
	},

	radioButton: {
		height: 25,
		width: 25,
		backgroundColor: 'white',
		borderRadius: 12.5,
		borderColor: COLOR_FONT_LIGHT_BLACK,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},

	radioButtonActive: {
		height: 25,
		width: 25,
		backgroundColor: 'white',
		borderRadius: 12.5,
		borderColor: COLOR_PRIMARY_PURPLE,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},

	radioButtonBullet: {
		height: 12,
		width: 12,
		borderRadius: 6,
		backgroundColor: COLOR_PRIMARY_PURPLE
	},

	//Login Screen 

	containerLogin: {
		flex: 1,
		backgroundColor: COLOR_PRIMARY_WHITE
	},

	headerHolder: {
		marginHorizontal: '3%'
	},

	loginButton: {
		backgroundColor: COLOR_FONT_LIGHT_BLACK,
		width: '90%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
	},

	buttonTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: COLOR_PRIMARY_WHITE
	},

	errorMessage: {
		color: COLOR_PRIMARY_ERROR_RED,
		fontSize: 14
	},

	terms: {
		textAlign: 'center',
		fontSize: 14,
		color: COLOR_FONT_BLACK
	},

	inputHolder: {
		alignItems: 'flex-start',
		marginBottom: '2%',
		marginLeft: '5%',
	},

	loginContainer: {
		alignItems: 'center',
		marginBottom: '3%',
		flex: 1,
		justifyContent: 'flex-end',
	},

	privacyHolder: {
		height: 60,
		marginBottom: '3%',
		alignItems: 'center',
		textAlign: 'center',
		flex: 1,
		marginHorizontal: '5%'
	},

	privacyText: {
		color: COLOR_PRIMARY_PURPLE,
	},

	errorText: {
		color: COLOR_PRIMARY_ERROR_RED,
		fontSize: 14
	},

	labelText: {
		color: COLOR_PRIMARY_PURPLE,
		fontSize: 14,
		marginBottom: '-4%',
		marginTop: '1%'
	},

	activeButton: {
		backgroundColor: COLOR_PRIMARY_PURPLE,
		width: '90%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
	},

	passwordText: {
		alignSelf: 'flex-start',
		color: COLOR_PRIMARY_PURPLE
	},

	//Landing Screen

	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: COLOR_LANDING_GRAY,
	},

	logo: {
		width: 290,
		height: 100,
		marginTop: '50%'
	},

	buttonsContainer: {
		flex: 1,
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginBottom: '5%'
	},

	signButton: {
		backgroundColor: COLOR_PRIMARY_WHITE,
		width: '90%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
		marginTop: '3%'
	},

	signButtonTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: COLOR_FONT_BLACK
	},

	loginButtonLanding: {
		backgroundColor: 'transparent',
		width: '90%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
		borderColor: COLOR_PRIMARY_WHITE,
		borderWidth: 1,
		marginTop: '3%'
	},

	loginButtonTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: COLOR_PRIMARY_WHITE
	},

	//Splash Screen
	splashContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLOR_LANDING_GRAY
	},

	splashImage: {
		height: 100,
		width: 100
	}
});

