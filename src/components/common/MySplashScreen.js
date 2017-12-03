/**
 * Author : Kusnadi
 * Description :
 * Component for creating SplashScreen on React Native
 * props = {
 *  logo = (image resource)
 *  textLogo = (string)
 *  footerText = (string)
 *  backgroundColor = (color)
 * }
 */

import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { SplashScreenStyle } from './theme/Style';

const MySplashScreen = (props) => {
  return (
    <View style={SplashScreenStyle.container}>
      <StatusBar hidden={true}/>
      <View style={SplashScreenStyle.body}>
        <View style={SplashScreenStyle.containerlogo}>
          <Image 
            style={SplashScreenStyle.logo}
            source={props.logo}            
          />
        </View>
        <Text
          style={SplashScreenStyle.textLogo}>
            {props.textLogo}
        </Text>
        <View style={SplashScreenStyle.containerLoader}>
          <Image 
            style={SplashScreenStyle.loader}
            source={require('../../icons/spinner.gif')}            
          />
        </View>        
      </View>
      <View style={SplashScreenStyle.footer}>
        <Text 
          style={SplashScreenStyle.footerText}>
            {props.footerText}
        </Text>
      </View>
    </View>
  );
}

export { MySplashScreen };
