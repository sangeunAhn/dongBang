import React, {Component} from 'react';
import {Alert} from 'react-native';
import * as axios from 'axios';
import Login from './presenter';

class Container extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
  }
  render() {
    return (
      <Login
        {...this.props}
        login={this._login}
        idPwFind={this._idPwFind}
        signUp={this._signUp}
        idChange={this._idChange}
        pwChange={this._pwChange}
      />
    );
  }

  _goToUpdateClub = () => {
    const t = this;
    const {id} = this.state;

    axios
      .post('http://13.209.221.206/php/Login/GetUserNo.php', {
        id,
      })
      .then(function(response) {
        userNo = JSON.stringify(response.data.message.userNo);
        t.props.navigation.navigate('UpdateClub', {
          userNo: userNo,
        });
      });
  };

  _goToCreateClub = () => {
    const t = this;
    const {id} = this.state;

    axios
      .post('http://13.209.221.206/php/Login/GetUserNo.php', {
        id,
      })
      .then(function(response) {
        userNo = JSON.stringify(response.data.message.userNo);
        school = JSON.stringify(response.data.message.school);
        setTimeout(() => {
          t.props.navigation.navigate(
            'MakeClub',
            {
              userNo: userNo,
              school: school,
            },
            1000,
          );
        });
      });
  };

  _getClub = () => {
    const {id} = this.state;
    const t = this;
    axios
      .post('http://13.209.221.206/php/Login/LoginGetClub.php', {
        id,
      })
      .then(function(response) {
        ms = response.data.message;
        {
          ms === 'true' ? t._goToUpdateClub() : t._goToCreateClub();
        }
      });
  };

  _getIdPw = () => {
    const {id, password} = this.state;
    const t = this;
    axios
      .post('http://13.209.221.206/php/Login/Login.php', {
        id,
        password,
      })
      .then(function(response) {
        login = response.data.message;

        if (login === 'true') {
          t._getClub();
        } else {
          Alert.alert('ID나 비밀번호가 맞지 않습니다.');
        }
      });
  };

  _login = () => {
    const {id, password} = this.state;
    if (id == '' || password == '') {
      Alert.alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      this._getIdPw();
    }
  };

  _idPwFind = () => {
    this.props.navigation.navigate('FindIdPw');
  };

  _signUp = () => {
    this.props.navigation.navigate('SignUpPermission');
  };

  _idChange = id => {
    this.setState({id});
  };

  _pwChange = password => {
    this.setState({password});
  };
}

export default Container;
