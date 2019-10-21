import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  Platform,
  SafeAreaView,
  Animated,
  Image,
  ImageBackground
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextField} from 'react-native-material-textfield';

import HeaderScrollView from 'react-native-header-scroll-view';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import RNKakaoLogins from 'react-native-kakao-logins';


const {width, height} = Dimensions.get('window');
kakaoLogin = () => {
  RNKakaoLogins.login((err, result) => {
    if (err) {
      Alert.alert('error', err.toString());
      return;
    }
    Alert.alert('result', JSON.stringify(result));
  });
};

const Login = props => (
  <>
  <ImageBackground  imageStyle= {{opacity:0.5}}style={{backgroundColor:'black',flex:1,alignSelf: 'stretch'}} source={require('../../../images/back.jpg')}>
    <View style={styles.container}>
      
        <Animatable.Text animation='fadeInUp' duration={4000} useNativeDriver={true} style={{color:'white', fontSize:width*0.1}}>대학교 모임이 {"\n"}궁금할땐?</Animatable.Text>
     
       <Animatable.View style={{marginTop:height*0.2, alignItems:'center'}}animation='fadeIn' delay={3000} duration={3000} useNativeDriver={true}>
        <LoginButton
       
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
        <TouchableOpacity  style={{flexDirection:'row', alignItems:'center',marginTop:30, backgroundColor: '#F7E314' , width:width*0.55, height:height*0.06}}onPress={() => this.kakaoLogin()}> 
           <Image style={{width:width*0.1, height:height*0.04}}source={require('../../../images/kakao.png')} />
            <Text style={{color: '#3C1E1E', fontWeight: 'bold'}}>카카오톡으로 로그인</Text>
        </TouchableOpacity>
          </Animatable.View>
    </View>
    </ImageBackground>
  </>
);

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.1,
    top: Platform.OS === 'ios' ? 30 : 15,
    left: 10,
    zIndex: 1,
  },
  container: {
    flex: 1,
   
    alignItems:'center',
    justifyContent:'center',
    
  },
  container2: {
    paddingHorizontal: '7%',
    paddingTop: '28%',
  },
  loginButton: {
    marginTop: 20,
  },
  password: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  passwordFont: {
    fontSize: width * 0.04,
    color: '#B7B9BC',
  },
  and: {
    marginVertical: height * 0.065,
    height: height * 0.025,
    alignItems: 'center',
    flexDirection: 'row',
  },
  andLineLeft: {
    flex: 1,
    width: '100%',
    backgroundColor: '#CCCFD2',
    height: 1,
    marginRight: 4,
  },
  andLineRight: {
    flex: 1,
    width: '100%',
    backgroundColor: '#CCCFD2',
    height: 1,
    marginLeft: 4,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    height: height * 0.07,

    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton2: {
    width: width * 0.6,
    height: height * 0.07,
    borderRadius: 15,
  },
  signUpText: {
    color: 'white',
    fontSize: width * 0.04,
  },
});

export default Login;
