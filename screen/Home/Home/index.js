import React, {Component} from 'react';
import {
  Platform,
  Linking,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  sliderWidth,
  itemWidth,
} from '../../../components/Snap/SliderEntry.style';
import SliderEntry from '../../../components/Snap/SliderEntry';
import styles, {colors} from '../../../components/Snap/index.style';
import {ENTRIES1, ENTRIES2} from '../../../components/Snap/entries';
import MainButton from '../../../components/Button/MainButton';
import Modal from 'react-native-simple-modal';

const {width, height} = Dimensions.get('window');

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export default class example extends Component {
  state = {open: false};
  openModal = () => this.setState({open: true});

  closeModal = () => this.setState({open: false});
  modalDidClose = () => {
    this.setState({open: false});
    console.log('Modal did close.');
  };

  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  _renderItem({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  mainExample(number, title) {
    const {slider1ActiveSlide} = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.8}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={3000}
          autoplayInterval={10000}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
        />
      </View>
    );
  }

  render() {
    const example1 = this.mainExample(
      1,
      'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots',
    );
    return (
      <>
        <View style={styles.container}>
          <View
            style={{
              marginTop: Platform.OS === 'ios' ? 30 : 15,
              width: width,
              height: height * 0.1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#3B3B3B',
                fontSize: width * 0.08,
                letterSpacing: 0.05,
                fontWeight: '900',
              }}>
              내 손 안의 동아리 '동방'
            </Text>
          </View>
          {this.gradient}
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}>
            {example1}
          </ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <MainButton
              // buttonColor={'#D7E8F7'}
              title={'들어가기'}
              titleColor={'#3B3B3B'}
              onPress={() => this.props.navigation.navigate('Schools')}
            />
            <TouchableOpacity
              style={{marginTop: height * 0.01, padding: 10}}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontSize: height * 0.023, color: '#3B3B3B'}}>
                {' '}
                동아리 생성 / 수정{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: height * 0.07,
            }}>
            <View style={{alignItems: 'flex-start'}}>
              <TouchableOpacity
                style={{padding: height * 0.02}}
                onPress={this.openModal}>
                <Text style={{color: '#888888', fontSize: height * 0.018}}>
                  문의하기
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  padding: height * 0.02,
                  color: '#888888',
                  fontSize: height * 0.015,
                }}>
                v1.0.11
              </Text>
            </View>
          </View>
        </View>
        <Modal
          modalDidOpen={this.modalDidOpen}
          modalDidClose={this.modalDidClose}
          open={this.state.open}
          closeOnTouchOutside={true}
          modalStyle={{
            borderRadius: 3,
            margin: 20,
            padding: 10,
            backgroundColor: '#F5F5F5',
          }}>
          <View style={{marginTop: 10, marginBottom: 15, marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>문의사항</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 15, marginBottom: 40}}>
            <Text
              style={{fontSize: width * 0.03, marginBottom: 10}}
              onPress={() => {
                Linking.openURL('tel:01043720440');
              }}>
              010 4372 0440
            </Text>
            <Text style={{fontSize: width * 0.03}}>leejjun28@gmail.com</Text>
          </View>
          <View style={{marginBottom: 5}}>
            <Text style={{color: '#848484', fontSize: width * 0.02}}>
              문의 가능 시간 : 09:00 ~ 18:00
            </Text>
          </View>
        </Modal>
      </>
    );
  }
}
