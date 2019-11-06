import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Platform,
  BackHandler,
  Text,
  SafeAreaView,
} from 'react-native';
import ClubDiv from '../../../components/Main/ClubDiv';
import HeaderScrollView from 'react-native-header-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";



const { width, height } = Dimensions.get('window');

export default class Main extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null,
  });
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      collapsed1:true,
      collapsed2:true,
      collapsed3:true,
      collapsed4:true,
      collapsed5:true,
      collapsed6:true,
      collapsed7:true,
      collapsed8:true,
      collapsed9:true,
      collapsed10:true,
      collapsed11:true,
    };
   
  }

  UNSAFE_componentWillMount = () => {


    const { navigation } = this.props;
    const schoolName = navigation.getParam('schoolName', 'NO-ID');
    this.setState({ schoolName: schoolName });
  };



  render() {
    let { schoolName } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            this.props.navigation.getParam('makeClub', 'NO-ID') == 'done'
              ? this.props.navigation.navigate('Home')
              : this.props.navigation.goBack();
          }}>
          <SafeAreaView>
            <Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
          </SafeAreaView>
        </TouchableOpacity>

        <Menu style={{ position: 'absolute', right: 10, top: Platform.OS === 'ios' ? 30 : 15, zIndex: 1 }}>
          <MenuTrigger >
            <Icon name='dots-three-horizontal' size={20} />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{ marginTop: 20, borderRadius: 10, width: 100, height: 40, justifyContent: 'center', }}>
            <MenuOption value={1} onSelect={() => this.props.navigation.navigate('Login')} text='동아리 생성' />

          </MenuOptions>
        </Menu>

        <HeaderScrollView
          headerContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            ...ifIphoneX({ paddingTop: 18 }, { paddingTop: 0 }),
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
            fontSize: width * 0.075,
          }}
          fadeDirection="up"
          title="동아리 찾기">
          {/* 맨 위 총동연 */}
          <Collapse 
          isCollapsed={this.state.collapsed1} 
          onToggle={(isCollapsed)=>this.setState({collapsed1:isCollapsed})}
          >
            <CollapseHeader>
              <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>동아리 연합</Text>
                {this.state.collapsed1 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'동아리 연합'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>
          <Collapse 
          isCollapsed={this.state.collapsed2} 
          onToggle={(isCollapsed)=>this.setState({collapsed2:isCollapsed})}
          >
            <CollapseHeader>
            <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>예술 공연</Text>
                {this.state.collapsed2 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'예술 공연'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>
          <Collapse 
          isCollapsed={this.state.collapsed3} 
          onToggle={(isCollapsed)=>this.setState({collapsed3:isCollapsed})}
          >
            <CollapseHeader>
            <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>예술 교양</Text>
                {this.state.collapsed3 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'예술 교양'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>
          <Collapse 
          isCollapsed={this.state.collapsed4} 
          onToggle={(isCollapsed)=>this.setState({collapsed4:isCollapsed})}
          >
            <CollapseHeader>
            <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>체육 구기</Text>
                {this.state.collapsed4 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'체육 구기'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>
          <Collapse 
          isCollapsed={this.state.collapsed5} 
          onToggle={(isCollapsed)=>this.setState({collapsed5:isCollapsed})}
          >
            <CollapseHeader>
            <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>체육 생활</Text>
                {this.state.collapsed5 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'체육 생활'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>
          <Collapse 
          isCollapsed={this.state.collapsed6} 
          onToggle={(isCollapsed)=>this.setState({collapsed6:isCollapsed})}
          >
            <CollapseHeader>
            <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>봉사</Text>
                {this.state.collapsed6 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'봉사'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>
          <Collapse 
          isCollapsed={this.state.collapsed7} 
          onToggle={(isCollapsed)=>this.setState({collapsed7:isCollapsed})}
          >
            <CollapseHeader>
            <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>국제</Text>
                {this.state.collapsed7 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'국제'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>
          <Collapse 
          isCollapsed={this.state.collapsed8} 
          onToggle={(isCollapsed)=>this.setState({collapsed8:isCollapsed})}
          >
            <CollapseHeader>
            <View style={{ paddingHorizontal: width * 0.03 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.menuTitle}>종교</Text>
                {this.state.collapsed8 == true ? 
                <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-up" size={30} color="#a7bfe8" /> 
              :
              <Ionicons style={{alignSelf:'flex-end', marginBottom:-5}}name="ios-arrow-down" size={30} color="#a7bfe8" /> 
              }
                
              
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: height * 0.032 }}>
                  <View style={styles.line} />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ClubDiv
                clubKind={'종교'}
                school={schoolName}
                navigation={this.props.navigation}
              />
            </CollapseBody>
          </Collapse>





        </HeaderScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    width: width * 0.2,
    height: height * 0.1,
    top: Platform.OS === 'ios' ? 30 : 15,
    left: 10,
    zIndex: 1,
  },
  headerRight: {
    position: 'absolute',


    right: 0,
    zIndex: 1,
  },
  menuTitle: {
    paddingTop: height * 0.015,
    fontWeight: 'bold',
    color: '#ADCDE9',
    fontSize: height * 0.03,
  },
  line: {
    borderBottomWidth: height * 0.001,
    borderColor: '#ADCDE9',
    width: '85%',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    paddingTop: 23,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: width * 0.05,
  },
  scroll: {
    flex: 1,
    paddingTop: 10,
  },
  div: {
    height: height * 0.1,
    // backgroundColor:'#dcdcdc',
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  school: {
    fontSize: width * 0.06,
  },
  navTitle: {
    color: 'black',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 30,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
});
