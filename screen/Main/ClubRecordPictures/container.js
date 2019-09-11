import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import * as axios from 'axios';
import ClubRecordPictures from './presenter';

class Container extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this._handleBackButtonClick = this._handleBackButtonClick.bind(this);
    this.state = {
      recordName: '',
      recordContent: '',
      picture: null,
      isGetting: false,
      getDatas: '',
    };
  }

  render() {
    return <ClubRecordPictures {...this.state} {...this.props} />;
  }

  componentWillMount = () => {
    this._getDatas();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  };

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  }

  _getDatas = async () => {
    //userNo 가지고 오기
    const {navigation} = this.props;
    var recordNo = navigation.getParam('recordNo', 'NO-ID');
    const t = this;
    // 데이터 가져오기
    await axios
      .post('http://dkstkdvkf00.cafe24.com/php/Main/GetRecordPictureM.php', {
        recordNo: recordNo,
      })
      .then(function(response) {
        t.setState({getDatas: response.data});
      });

    this.setState({isGetting: true});
  };

  _handleBackButtonClick = () => {
    this.props.navigation.goBack();

    return true;
  };
}

export default Container;
