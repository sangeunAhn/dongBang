import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,

  View,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from 'react-native';
import IntroduceChars from '../../../components/Char/IntroduceChars';
import HeaderScrollView from 'react-native-header-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import ImageView from 'react-native-image-view';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import { Slider } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ClubChars from '../../../components/Char/ClubChars';
import ViewOverflow from 'react-native-view-overflow';


const { width, height } = Dimensions.get('window');
handleViewRef = ref => this.view = ref;


bounce = () => this.view.fadeIn(2000)



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


      

      <Swiper paginationStyle={{bottom:10}}loop={false}>
        
        <View style={styles.container}>
        <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <SafeAreaView>
          <Ionicons name="ios-arrow-back" size={width * 0.08} color="white" />
        </SafeAreaView>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mainPicture} onPress={props.imageViewVisible1}>
          <ImageBackground  blurRadius={2} source={{ uri: props.clubMainPicture }} style={styles.mainPicture}/>
          </TouchableOpacity>
          <View style={{ top: -100 }} >

            <View style={styles.box}>

              <View style={styles.inBox}>

                <Text style={styles.clubName}>{props.clubName}</Text>
                <Text note style={{top:-10}}> {props.clubChar.map((char, i) => {
                  return <ClubChars chars={char} key={i} />;
                })}</Text>
                <TouchableOpacity
                  style={styles.recordBtn}
                onPress={props.gotoRecord}
                >
                  <Text style={styles.recordText}>기록</Text>
                </TouchableOpacity>

              </View>
                <TouchableOpacity onPress={props.imageViewVisible2}  style={styles.logo} >
              <Thumbnail source={{ uri: props.clubLogo }} style={styles.logoImage} />
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.slider}>

            <View
              style={styles.sliderBlock}>
              <Text
                style={styles.sliderTextL}>
                소규모
              </Text>
              <Slider
                disabled={true}
                value={props.clubSize}
                style={{ width: width * 0.55 }}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{ borderWidth: 3.5, borderColor: '#ADCDE9', width: 18, height: 18, borderRadius: 18 * 0.5 }}
                trackStyle={{ height: 3 }}
              />
              <Text
                style={styles.sliderTextR}>
                대규모
              </Text>
            </View>
            <View style={styles.sliderLine} />
            <View
              style={styles.sliderBlock}>
              <Text
                style={styles.sliderTextL}>
                자율적인
              </Text>
              <Slider
                disabled={true}
                value={props.clubSize}
                style={{ width: width * 0.55 }}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{ borderWidth: 3.5, borderColor: '#ADCDE9', width: 18, height: 18, borderRadius: 18 * 0.5 }}
                trackStyle={{ height: 3 }}
              />
              <Text
                style={styles.sliderTextR}>
                체계적인
              </Text>
            </View>
            <View style={styles.sliderLine} />
            <View
              style={styles.sliderBlock}>
              <Text
                style={styles.sliderTextL}>
                재미있는
              </Text>
              <Slider
                disabled={true}
                value={props.clubSize}
                style={{ width: width * 0.55 }}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{ borderWidth: 3.5, borderColor: '#ADCDE9', width: 18, height: 18, borderRadius: 18 * 0.5 }}
                trackStyle={{ height: 3 }}
              />
              <Text
                style={styles.sliderTextR}>
                진지한
              </Text>
            </View>
            <View style={styles.sliderLine} />
            <View
              style={styles.sliderBlock}>
              <Text
                style={styles.sliderTextL}>
                친목도모
              </Text>
              <Slider
                disabled={true}
                value={props.clubSize}
                style={{ width: width * 0.55 }}
                minimumTrackTintColor="#A9DFE2"
                maximumTrackTintColor="#D1D5FA"
                thumbTintColor="white"
                thumbStyle={{ borderWidth: 3.5, borderColor: '#ADCDE9', width: 18, height: 18, borderRadius: 18 * 0.5 }}
                trackStyle={{ height: 3 }}
              />
              <Text
                style={styles.sliderTextR}>
                활동중심
              </Text>
            </View>
            <View style={styles.sliderLine} />
          </View>
        </View>
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
        <ScrollView
              style={styles.introBox}
              nestedScrollEnabled={true}>
              <Text style={{paddingVertical: 15, paddingHorizontal: 10}}>
                {props.clubIntroduce}
              </Text>
            </ScrollView>
        </View>
      </Swiper>


      // <View style={styles.container}>
      //   <TouchableOpacity
      //     style={styles.backBtn}
      //     onPress={() => {
      //       props.navigation.goBack();
      //     }}>
      //     <SafeAreaView>
      //       <Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
      //     </SafeAreaView>
      //   </TouchableOpacity>
      //   <View
      //     style={{
      //       alignItems: 'center',
      //       marginTop: Platform.OS === 'ios' ? 30 : 15,
      //     }}>
      //     <Text style={{fontSize: width * 0.05}}>동아리 소개</Text>
      //   </View>
      //   {/* <HeaderScrollView
      //     headerContainerStyle={{
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //       ...ifIphoneX({paddingTop: 18}, {paddingTop: 0}),
      //       height: Platform.OS === 'ios' ? height * 0.1 : height * 0.08,
      //     }}
      //     headlineStyle={{
      //       height: height * 0.1,
      //       textAlign: 'center',
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //       alignSelf: 'center',
      //       fontSize: width * 0.05,
      //       paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048,
      //     }}
      //     headerComponentContainerStyle={{
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //       height: height * 0.08,
      //     }}
      //     titleStyle={{
      //       // paddingTop: Platform.OS === 'ios' ? 15 : 0,
      //       color: '#3B3B3B',
      //       fontSize: width * 0.09,
      //     }}
      //     fadeDirection="up"
      //     title="동아리 소개"> */}

      //   <Swiper onIndexChanged={this.bounce} loop={false}>
      //     <View
      //       style={{
      //         flex: 1,
      //         paddingTop: Platform.OS === 'ios' ? -30 : -15,
      //         justifyContent: 'center',
      //       }}>
            // <TouchableOpacity
            //   style={styles.MainPictureView}
            //   onPress={props.imageViewVisible1}>
            //   {props.clubMainPicture === null || props.clubMainPicture == '' ? (
            //     <View style={styles.clubMainPicture} />
            //   ) : (
            //     <FastImage
            //       style={styles.clubMainPicture}
            //       source={{uri: props.clubMainPicture}}
            //     />
            //   )}
            // </TouchableOpacity>

            // <View style={styles.logoView1}>
            //   {
            //     <TouchableOpacity
            //       style={styles.logoView2}
            //       onPress={props.imageViewVisible2}>
            //       {props.clubLogo === null || props.clubLogo == '' ? (
            //         <FastImage style={styles.clubLogo} />
            //       ) : (
            //         <FastImage
            //           style={styles.clubLogo}
            //           source={{uri: props.clubLogo}}
            //         />
            //       )}
            //     </TouchableOpacity>
            //   }
            // </View>
      //       <Text
      //         style={{
      //           textAlign: 'center',
      //           color: 'black',
      //           marginTop: -height * 0.05,
      //           fontSize: height * 0.028,
      //         }}>
      //         {props.clubName}
      //       </Text>
      //     </View>

      //     <Animatable.View  ref={this.handleViewRef} useNativeDriver={true}
      //       style={{flex: 1, }}>

      //      <View style={{marginLeft:width*0.06, marginTop:height*0.08, marginBottom:height*0.1}}>
      //        <Text style={{fontSize:width*0.08, color:'#636363'}}>우리 {"\n"}동아리/모임은요</Text>
      //      </View>
          //  <View  style={{backgroundColor:'white'}}>
          //   <View
          //     style={{
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       flexDirection: 'row',
          //       marginVertical:height*0.015,
          //     }}>
          //     <Text
          //       style={{
          //         color: '#003964',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       소규모
          //     </Text>
          //     <Slider
          //       disabled={true}
          //       value={props.clubSize}
          //       style={{width: width * 0.6}}
          //       minimumTrackTintColor="#A9DFE2"
          //       maximumTrackTintColor="#D1D5FA"
          //       thumbTintColor="white"
          //       thumbStyle={{borderWidth:3.5, borderColor:'#ADCDE9', width: 18, height: 18, borderRadius: 18*0.5}}
          //       trackStyle={{height: 3}}
          //     />
          //     <Text
          //       style={{
          //         color: '#580000',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       대규모
          //     </Text>
          //   </View>
          //   <View style={{alignSelf:'center',width:width*0.8, height:0.2, backgroundColor:'#D8D8D8'}}/>
          //   <View
          //     style={{
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       flexDirection: 'row',
          //       marginVertical:height*0.015,
          //     }}>
          //     <Text
          //       style={{
          //         color: '#003964',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       자율적인
          //     </Text>
          //     <Slider
          //       disabled={true}
          //       value={props.clubSize}
          //       style={{width: width * 0.6}}
          //       minimumTrackTintColor="#A9DFE2"
          //       maximumTrackTintColor="#D1D5FA"
          //       thumbTintColor="white"
          //       thumbStyle={{borderWidth:3.5, borderColor:'#ADCDE9', width: 18, height: 18, borderRadius: 18*0.5}}
          //       trackStyle={{height: 3}}
          //     />
          //     <Text
          //       style={{
          //         color: '#580000',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       체계적인
          //     </Text>
          //   </View>
          //   <View style={{alignSelf:'center',width:width*0.8, height:0.2, backgroundColor:'#D8D8D8'}}/>
          //   <View
          //     style={{
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       flexDirection: 'row',
          //       marginVertical:height*0.015,
          //     }}>
          //     <Text
          //       style={{
          //         color: '#003964',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       재미있는
          //     </Text>
          //     <Slider
          //       disabled={true}
          //       value={props.clubSize}
          //       style={{width: width * 0.6}}
          //       minimumTrackTintColor="#A9DFE2"
          //       maximumTrackTintColor="#D1D5FA"
          //       thumbTintColor="white"
          //       thumbStyle={{borderWidth:3.5, borderColor:'#ADCDE9', width: 18, height: 18, borderRadius: 18*0.5}}
          //       trackStyle={{height: 3}}
          //     />
          //     <Text
          //       style={{
          //         color: '#580000',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       진지한
          //     </Text>
          //   </View>
          //   <View style={{alignSelf:'center',width:width*0.8, height:0.2, backgroundColor:'#D8D8D8'}}/>
          //   <View
          //     style={{
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       flexDirection: 'row',
          //       marginVertical:height*0.015,
          //     }}>
          //     <Text
          //       style={{
          //         color: '#003964',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       친목도모
          //     </Text>
          //     <Slider
          //       disabled={true}
          //       value={props.clubSize}
          //       style={{width: width * 0.6}}
          //       minimumTrackTintColor="#A9DFE2"
          //       maximumTrackTintColor="#D1D5FA"
          //       thumbTintColor="white"
          //       thumbStyle={{borderWidth:3.5, borderColor:'#ADCDE9', width: 18, height: 18, borderRadius: 18*0.5}}
          //       trackStyle={{height: 3}}
          //     />
          //     <Text
          //       style={{
          //         color: '#580000',
          //         width: width * 0.2,
          //         textAlign: 'center',
          //         fontSize: width * 0.035,
          //       }}>
          //       활동중심
          //     </Text>
          //   </View>
          //   <View style={{alignSelf:'center',width:width*0.8, height:0.2, backgroundColor:'#D8D8D8'}}/>
          //   </View>
          //   <View style={styles.chars}>
          //     {props.clubChar.map((char, index) => (
          //       <IntroduceChars key={index} char={char} />
          //     ))}
          //   </View>
      //     </Animatable.View >

      //     <View style={{flex: 1}}>
            // <ScrollView
            //   style={{
            //     borderRadius: 5,
            //     backgroundColor: 'white',
            //     margin: width * 0.05,
            //     shadowColor: '#E1E1E1',
            //     shadowOffset: {height: 1.5, width: 0},
            //     shadowOpacity: 5,
            //     shadowRadius: 3,
            //     elevation: 1.5,
            //   }}
            //   nestedScrollEnabled={true}>
            //   <Text style={{paddingVertical: 10, paddingHorizontal: 5}}>
            //     {props.clubIntroduce}
            //   </Text>
            // </ScrollView>
      //     </View>
      //   </Swiper>
      //   {/* </HeaderScrollView> */}
      // </View>
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
  container:{ 
    flex: 1, 
    backgroundColor: '#FAFAFA' 
  },
  mainPicture:{ 
    alignItems: 'center', 
    flex: 1.8, 
    width: '100%', 
    height: '100%' 
  },
  box:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1, 
    position: 'absolute', 
    alignSelf: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    width: width * 0.9, 
    height: 200, 
    padding: 10, 
    borderRadius: 10, 
    flexDirection: 'row'
  },
  inBox:{ 
    flex: 1, 
    flexDirection: 'column', 
    height: 110, 
    marginTop: 50, 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  clubName:{ 
    fontSize: 25, 
    fontWeight: 'bold' 
  },
  recordBtn:{ 
    justifyContent: 'center', 
    width: 80, 
    height: 25, 
    backgroundColor: '#a7bfe8',
    borderRadius: 10 
  },
  recordText:{ 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 15 
  },
  logo:{ 
    left: width * 0.45 - 55, 
    position: 'absolute', 
    top: -55, 
    zIndex: 1000, 
    width: 110, 
    height: 110, 
    borderRadius: 60, 
    alignSelf: 'center', 
  },
  logoImage:{ 
    zIndex: 1000, 
    width: 110, 
    height: 110, 
    borderRadius: 60, 
    alignSelf: 'center', 
  },
  slider:{ 
    top: 110, 
    flex: 3 
  },
  sliderBlock:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: height * 0.02,
  },
  sliderTextL:{
    color: '#003964',
    width: width * 0.2,
    textAlign: 'center',
    fontSize: width * 0.035,
  },
  sliderTextR:{
    color: '#580000',
    width: width * 0.2,
    textAlign: 'center',
    fontSize: width * 0.035,
  },
  sliderLine:{ 
    alignSelf: 'center', 
    width: width * 0.8, 
    height: 0.2, 
    backgroundColor: '#D8D8D8' 
  },
  introBox:{
    borderRadius: 5,
    backgroundColor: 'white',
    top:10,
    marginVertical: width * 0.13,
    marginHorizontal: width*0.07,
    shadowColor: '#E1E1E1',
    shadowOffset: {height: 1.5, width: 0},
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 1.5,
  },
});

export default ClubIntroduce;
