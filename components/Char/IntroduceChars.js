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
		paddingRight: width*0.02,
		paddingLeft: width*0.02,
		alignItems: 'center'
	},
	title: {
		fontSize: height*0.017,
		color: '#BBBBBB',
	},
});
