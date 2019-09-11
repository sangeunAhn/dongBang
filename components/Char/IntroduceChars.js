import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Text, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
export default class CharEX extends Component {
	static defaultProps = {
		title: 'untitled',
		buttonColor: '#28E7FF',
		onPress: () => null,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.button}>
				<Text style={[styles.title]}>#{this.props.char}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: height*0.0145,
		borderRadius: height*0.029,
		height: height*0.053,
		backgroundColor: '#FFF1ED',
		paddingRight: height*0.026,
		paddingLeft: height*0.026,
		marginRight: height*0.0145,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 2,
		alignItems: 'center'
	},
	title: {
		fontSize: height*0.018,
		color: '#505050',
	},
});
