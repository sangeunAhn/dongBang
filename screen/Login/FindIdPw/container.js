import React, { Component } from 'react';
import { Alert } from 'react-native';
import Login from './presenter';
import * as axios from 'axios';
import Communications from 'react-native-communications';

class Container extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null,
	});

	constructor(props) {
		super(props);
		this.state = {
			selectBtn: true,
			idEmail: '',
			pwEmail: '',
			pwId: '',
		};
	}
	render() {
		return (
			<Login
				{...this.props}
				{...this.state}
				idBtnPress={this._idBtnPress}
				pwBtnPress={this._pwBtnPress}
				idConfirmBtn={this._idConfirmBtn}
				pwConfirmBtn={this._pwConfirmBtn}
				idEmailChange={this._idEmailChange}
				pwIdChange={this._pwIdChange}
				pwEmailChange={this._pwEmailChange}
			/>
		);
	}

	_idBtnPress = () => {
		this.setState({ selectBtn: true });
	};

	_pwBtnPress = () => {
		this.setState({ selectBtn: false });
	};

	_idConfirmBtn = () => {
		const { idEmail } = this.state;
		const t = this;
		if (idEmail == '') {
			Alert.alert('이메일을 입력해주세요');
		} else {
			axios
				.post('http://dkstkdvkf00.cafe24.com/php/FindIdPw/FindId.php', {
					email: idEmail,
				})
				.then(function(response) {
					response = response.data.message;
					// console.log(response)
					if (response === null) {
						Alert.alert('등록되지 않은 이메일입니다.');
					} else {
						t._sendIdEmail();
					}
				});
		}
	};

	_pwConfirmBtn = () => {
		const { pwEmail, pwId } = this.state;
		const t = this;
		if (pwEmail == '' || pwId == '') {
			Alert.alert('모두 입력해주세요');
		} else {
			axios
				.post('http://dkstkdvkf00.cafe24.com/php/FindIdPw/FindPw.php', {
					id: pwId,
					email: pwEmail,
				})
				.then(function(response) {
					response = response.data.message;
					// console.log(response);
					if (response === null) {
						Alert.alert('ID 또는 이메일이 잘못입력되었습니다.');
					} else {
						t._sendPwEmail();
					}
				});
		}
	};

	_idEmailChange = idEmail => {
		this.setState({ idEmail });
	};

	_pwIdChange = pwId => {
		this.setState({ pwId });
	};

	_pwEmailChange = pwEmail => {
		this.setState({ pwEmail });
	};

	_sendIdEmail = () => {
		const { idEmail } = this.state;
		const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
		Communications.email(['angineer01@naver.com'],null,null,'Demo Subject','Demo Content for the mail')
	};
}

export default Container;
