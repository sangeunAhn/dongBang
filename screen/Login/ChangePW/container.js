import React, { Component } from 'react';
import { Alert } from 'react-native';
import Login from './presenter';
import * as axios from 'axios';
import Mailer from 'react-native-mail';

class Container extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null,
	});

	constructor(props) {
		super(props);
		this.state = {
			pw: '',
			pw2: ''
		};
	}
	render() {
		return (
			<Login
				{...this.props}
				{...this.state}
				pwChange={this._pwChange}
				pw2Change={this._pw2Change}
				btnPress={this._btnPress}
			/>
		);
	}


	_pwChange = pw => {
		this.setState({ pw });
	};

	_pw2Change = pw2 => {
		this.setState({ pw2 });
	};

	_changePW = async () => {
		const { navigation } = this.props;
		const {pw} = this.state;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		userNo = userNo.substring(1, userNo.length - 1);

		let formData = new FormData();
		formData.append('pw', pw);
		formData.append('userNo', userNo);

		await fetch('http://dkstkdvkf00.cafe24.com/php/Login/ChangePw.php', {
			method: 'POST',
			body: formData,
			header: {
				'content-type': 'multipart/form-data',
			},
		});

		Alert.alert('비밀번호가 수정되었습니다')
		navigation.goBack();
	}

	_btnPress = () => {
		const {pw,pw2} = this.state;
		const t = this;
		if(pw==''||pw2==''){
			Alert.alert('모두 채워주세요!')
		} else if (pw !== pw2) {
			Alert.alert('비밀번호가 맞지 않습니다')
		} else if (pw.length<7||pw.length>14){
			Alert.alert('비밀번호는 7자 이상 14자 이하여야합니다')
		} else {
			t._changePW()
		}
	}
}

export default Container;
