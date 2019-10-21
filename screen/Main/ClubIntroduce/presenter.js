import React, {Component} from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import IntroduceChars from '../../../components/Char/IntroduceChars';
import HeaderScrollView from 'react-native-header-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getStatusBarHeight, ifIphoneX} from 'react-native-iphone-x-helper';
import ImageView from 'react-native-image-view';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import {Slider} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const ClubIntroduce = props => (
  <>
    <ImageView
      images={[
        {
          source: {
            uri: props.clubMainPicture,
          },
          title: '메인사진',
          width: width,
          // height: props.imgHeight,
        },
        {
          source: {
            uri: props.clubLogo,
          },
          title: '로고사진',
          width: width,
          height: width,
        },
      ]}
      imageIndex={props.imageViewIndex}
      isVisible={props.isImageViewVisible}
    />
    {props.isGetting1 && props.isGetting2 ? (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <SafeAreaView>
            <Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
          </SafeAreaView>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            marginTop: Platform.OS === 'ios' ? 30 : 15,
          }}>
          <Text style={{fontSize: width * 0.05}}>동아리 소개</Text>
        </View>
        {/* <HeaderScrollView
          headerContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            ...ifIphoneX({paddingTop: 18}, {paddingTop: 0}),
            height: Platform.OS === 'ios' ? height * 0.1 : height * 0.08,
          }}
          headlineStyle={{
            height: height * 0.1,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            fontSize: width * 0.05,
            paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048,
          }}
          headerComponentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            height: height * 0.08,
          }}
          titleStyle={{
            // paddingTop: Platform.OS === 'ios' ? 15 : 0,
            color: '#3B3B3B',
            fontSize: width * 0.09,
          }}
          fadeDirection="up"
          title="동아리 소개"> */}

        <Swiper loop={false}>
          <View
            style={{
              flex: 1,
              paddingTop: Platform.OS === 'ios' ? -30 : -15,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.MainPictureView}
              onPress={props.imageViewVisible1}>
              {props.clubMainPicture === null || props.clubMainPicture == '' ? (
                <View style={styles.clubMainPicture} />
              ) : (
                <FastImage
                  style={styles.clubMainPicture}
                  source={{uri: props.clubMainPicture}}
                />
              )}
            </TouchableOpacity>

            <View style={styles.logoView1}>
              {
                <TouchableOpacity
                  style={styles.logoView2}
                  onPress={props.imageViewVisible2}>
                  {props.clubLogo === null || props.clubLogo == '' ? (
                    <FastImage style={styles.clubLogo} />
                  ) : (
                    <FastImage
                      style={styles.clubLogo}
                      source={{uri: props.clubLogo}}
                    />
                  )}
                </TouchableOpacity>
              }
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                marginTop: -height * 0.05,
                fontSize: height * 0.028,
              }}>
              {props.clubName}
            </Text>
          </View>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                소규모
              </Text>
              <Slider
                disabled={true}
                value={props.clubSize}
                style={{width: width * 0.6}}
                minimumTrackTintColor="#E5E5E5"
                maximumTrackTintColor="#E5E5E5"
                thumbTintColor="#ADCDE9"
                thumbStyle={{width: 15, height: 15, borderRadius: 3}}
                trackStyle={{height: 2}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                대규모
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                자율적인
              </Text>
              <Slider
                disabled={true}
                value={props.clubAutonomous}
                style={{width: width * 0.6}}
                minimumTrackTintColor="#E5E5E5"
                maximumTrackTintColor="#E5E5E5"
                thumbTintColor="#ADCDE9"
                thumbStyle={{width: 15, height: 15, borderRadius: 3}}
                trackStyle={{height: 2}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                체계적인
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                재미있는
              </Text>
              <Slider
                disabled={true}
                value={props.clubFunny}
                style={{width: width * 0.6}}
                minimumTrackTintColor="#E5E5E5"
                maximumTrackTintColor="#E5E5E5"
                thumbTintColor="#ADCDE9"
                thumbStyle={{width: 15, height: 15, borderRadius: 3}}
                trackStyle={{height: 2}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                진지한
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#003964',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                친목도모
              </Text>
              <Slider
                disabled={true}
                value={props.clubFriendship}
                style={{width: width * 0.6}}
                minimumTrackTintColor="#E5E5E5"
                maximumTrackTintColor="#E5E5E5"
                thumbTintColor="#ADCDE9"
                thumbStyle={{width: 15, height: 15, borderRadius: 3}}
                trackStyle={{height: 2}}
              />
              <Text
                style={{
                  color: '#580000',
                  width: width * 0.2,
                  textAlign: 'center',
                  fontSize: width * 0.035,
                }}>
                활동중심
              </Text>
            </View>
            <View style={styles.chars}>
              {props.clubChar.map((char, index) => (
                <IntroduceChars key={index} char={char} />
              ))}
            </View>
          </View>

          <View style={{flex: 1}}>
            <ScrollView
              style={{
                borderRadius: 5,
                backgroundColor: 'white',
                margin: width * 0.05,
                shadowColor: '#E1E1E1',
                shadowOffset: {height: 1.5, width: 0},
                shadowOpacity: 5,
                shadowRadius: 3,
                elevation: 1.5,
              }}
              nestedScrollEnabled={true}>
              <Text style={{paddingVertical: 10, paddingHorizontal: 5}}>
                {props.clubIntroduce}
              </Text>
            </ScrollView>
          </View>
        </Swiper>
        {/* </HeaderScrollView> */}
      </View>
    ) : (
      <ActivityIndicator size="large" style={styles.activityIndicator} />
    )}
  </>
);

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.1,
    top: Platform.OS === 'ios' ? 30 : 15,
    left: width * 0.028,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  chars: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.8,
    marginTop: height * 0.05,
  },
  blank: {
    width: width,
    height: height * 0.03,
  },
  MainPictureView: {
    alignItems: 'center',
    marginTop: height * 0.007,
    marginHorizontal: width * 0.05,
  },
  logoView1: {
    alignItems: 'center',
    top: -height * 0.036,
    zIndex: 1,
  },
  logoView2: {
    width: height * 0.15,
    height: height * 0.15,
    top: -height * 0.036,
    zIndex: 1,
    borderRadius: height * 0.15 * 0.5,
  },
  clubLogo: {
    backgroundColor: '#ADCDE9',
    width: height * 0.15,
    height: height * 0.15,
    borderRadius: height * 0.15 * 0.5,
    borderWidth: 0.2,
    borderColor: '#9F9F9F',
  },
  input: {
    borderRadius: 8,
    width: '100%',

    backgroundColor: 'white',
    shadowColor: '#E1E1E1',
    shadowOffset: {height: 1.5, width: 0},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 1.5,
    marginTop: 5,
  },
  text: {
    color: '#ADCDE9',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  text1: {
    color: '#ADCDE9',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    paddingHorizontal: width * 0.05,
  },
  textIn: {
    flex: 1,
    padding: 7,
    fontSize: width * 0.04,
  },
  block: {
    paddingBottom: 30,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  clubMainPicture: {
    marginTop: 5,
    width: width,
    height: height * 0.35,
    borderRadius: 5,
    backgroundColor: '#CEE1F2',
  },
});

export default ClubIntroduce;
