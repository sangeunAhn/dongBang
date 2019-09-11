import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const {height, width} = Dimensions.get('window');

export default class Pictures extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.image}>
            <AutoHeightImage
              width={width - 22}
              source={{uri: this.props.picture}}
            />
          </View>
          <View style={styles.bottom}>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 20,
    marginTop: height * 0.0173,
    marginBottom: height * 0.0173,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    borderRadius: height * 0.015,
    shadowColor: '#DEDEDE',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 2,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    borderTopLeftRadius: height * 0.013,
    borderTopRightRadius: height * 0.013,
    overflow: 'hidden',
  },
  bottom: {
    height: height * 0.112,
    borderRadius: height * 0.013,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: height * 0.028,
    color: '#2c3e50',
  },
});
