import React, {Component} from 'react';
import {BackHandler, Image, Dimensions} from 'react-native';
import * as axios from 'axios';
import ClubIntroduce from './presenter';

const {width, height} = Dimensions.get('window');

class Container extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this._handleBackButtonClick = this._handleBackButtonClick.bind(this);
    this.state = {
      clubName: '',
      clubPhoneNumber: '',
      clubIntroduce: '',
      clubLogo: null,
      clubMainPicture: null,
      clubChar: [],
      isGetting1: false,
      isGetting2: false,
      isImageViewVisible: false,
      imageViewIndex: 0,
      imgWidth: 0,
      value: 5,
      data: [],
      options: {},
      clubSize: 0.5,
      clubAutonomous: 0.5,
      clubFunny: 0.5,
      clubFriendship: 0.5,
    };
  }

  render() {
    return (
      <ClubIntroduce
        {...this.state}
        {...this.props}
        imageViewVisible1={this._imageViewVisible1}
        imageViewVisible2={this._imageViewVisible2}
        gotoRecord={this._gotoRecord}
      />
    );
  }

  componentWillMount = () => {
    this._getDatas();
    this._getChars();

    BackHandler.addEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
    const {navigation} = this.props;
    var clubLogo = navigation.getParam('clubLogo', 'NO-ID');
    var clubMainPicture = navigation.getParam('clubMainPicture', 'NO-ID');
    this.setState({
      clubLogo,
      clubMainPicture,
    });

    Image.getSize(clubMainPicture, (width, height) => {
      // calculate image width and height
      const screenWidth = Dimensions.get('window').width;
      this.setState({imgWidth: screenWidth});
    });
  };

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this._handleBackButtonClick,
    );
  }
  _gotoRecord = () => {
    this._onClose();
    this.props.navigation.navigate('Record', {
      clubName: this.props.clubName,
      school: this.props.school,
    });
  };
  
  _getDatas = async () => {
    const t = this;
    const {navigation} = this.props;
    var clubName = navigation.getParam('clubName', 'NO-ID');
    var school = navigation.getParam('school', 'NO-ID');

    this.setState({clubName: clubName});

    // 데이터 가져오기
    await axios
      .post('http://13.209.221.206/php/Main/GetClubIntroduce.php', {
        clubName: clubName,
        school: school,
      })
      .then(function(response) {
        t._setDatas(response);
      });

    this.setState({isGetting1: true});
  };

  _setDatas = response => {
    var clubPhoneNumber = response.data.message.clubPhoneNumber;
    clubPhoneNumber = clubPhoneNumber.replace(/\\n/gi, '\n');
    this.setState({
      clubPhoneNumber: clubPhoneNumber,
    });

    var clubIntroduce = response.data.message.clubIntroduce;
    clubIntroduce = clubIntroduce.replace(/\\n/gi, '\n');
    this.setState({
      clubIntroduce: clubIntroduce,
    });

    var clubLogo = response.data.message.clubLogo_high;
    this.setState({
      clubLogo: clubLogo,
    });

    var clubMainPicture = response.data.message.clubMainPicture_high;
    this.setState({
      clubMainPicture: clubMainPicture,
    });

    var clubSize = response.data.message.clubSize * 1;
    this.setState({
      clubSize: clubSize,
    });

    var clubAutonomous = response.data.message.clubAutonomous * 1;
    this.setState({
      clubAutonomous: clubAutonomous,
    });

    var clubFunny = response.data.message.clubFunny * 1;
    this.setState({
      clubFunny: clubFunny,
    });

    var clubFriendship = response.data.message.clubFriendship * 1;
    this.setState({
      clubFriendship: clubFriendship,
    });
  };

  //특성 가져오기
  _getChars = async () => {
    const t = this;
    const {navigation} = this.props;
    const {clubChar} = this.state;
    var clubName = navigation.getParam('clubName', 'NO-ID');
    var school = navigation.getParam('school', 'NO-ID');

    // 데이터 가져오기
    await axios
      .post('http://13.209.221.206/php/Main/GetClubChars.php', {
        clubName: clubName,
        school: school,
      })
      .then(result => {
        const response = result.data;
        var clubCharArray = new Array();

        response.forEach(row => {
          clubCharArray.push(row.chars);
        });

        this.setState({
          clubChar: clubChar.concat(clubCharArray),
          isGetting2: true,
        });
      });
  };

  _handleBackButtonClick = () => {
    this.props.navigation.goBack();

    return true;
  };

  _imageViewVisible1 = () => {
    this.setState({isImageViewVisible: true, imageViewIndex: 0});
  };

  _imageViewVisible2 = () => {
    this.setState({isImageViewVisible: true, imageViewIndex: 1});
  };
}

export default Container;
