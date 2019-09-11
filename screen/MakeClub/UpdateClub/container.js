import React from 'react';
import {Alert} from 'react-native';
import UpdateClub from './presenter';

export default class ClubModify extends React.Component {
  state = {open: false};
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <UpdateClub
        {...this.props}
        gotoSignUp={this._gotoSignUp}
        gotoChar={this._gotoChar}
        gotoRecord={this._gotoRecord}
        changePw={this._changePw}
        goodBye={this._goodBye}
      />
    );
  }
  _changePw = () => {
    this.props.navigation.navigate('ChangePW', {
      userNo,
    });
  };

  _deleteUser = async () => {
    const {navigation} = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    userNo = userNo.replace(/[^0-9]/g, '');

    let formData = new FormData();
    formData.append('userNo', userNo);

    await fetch('http://dkstkdvkf00.cafe24.com/php/Login/deleteUser.php', {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    });
    Alert.alert('탈퇴되었습니다.');
    navigation.navigate('Home');
  };

  _goodBye = () => {
    const t = this;
    Alert.alert('회원 탈퇴', '정말 탈퇴하시겠습니까?', [
      {text: '예', onPress: () => t._deleteUser()},
      {text: '아니요', onPress: () => console.log('아니요')},
    ]);
  };

  _gotoSignUp = () => {
    const {navigation} = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    userNo = userNo.replace(/[^0-9]/g, '');

    this.props.navigation.navigate('MakeClub', {
      userNo: userNo,
      from: 'm',
    });
  };

  _gotoChar = () => {
    const {navigation} = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    userNo = userNo.replace(/[^0-9]/g, '');

    this.props.navigation.navigate('MakeChars', {
      userNo: userNo,
      from: 'm',
    });
  };

  _gotoRecord = () => {
    const {navigation} = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    userNo = userNo.replace(/[^0-9]/g, '');

    this.props.navigation.navigate('MakeRecord', {
      userNo: userNo,
      from: 'm',
    });
  };
}
