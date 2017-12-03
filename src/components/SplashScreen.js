

import React, { Component } from 'react';
import { View } from 'react-native';
import { MySplashScreen } from './common/MySplashScreen';

export default class SplashScreen extends Component {

  render() {
    return (
        <MySplashScreen 
          logo={require('../images/apps_logo.png')}
          textLogo={'Trains Schedule Apps'}
          footerText={'Copyright 2017. Kusnadi'}
        />
    );
  }
}
