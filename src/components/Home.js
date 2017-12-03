
import React, { Component } from 'react';
import { View } from 'react-native';
import { MyHeader } from './common/MyHeader';

export default class Home extends Component {

  render() {
    return (
      <View>
        <MyHeader 
          textHeader={'Train Schedule Apps'}
          leftIconImage={require('../icons/back-arrow.png')}
          rightIconImage={require('../icons/menu-vertical.png')}
        />
      </View>
    );
  }
}
