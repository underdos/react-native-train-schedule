
import React, { Component } from 'react';
import { View, Alert, Platform, UIManager, LayoutAnimation } from 'react-native';
import { MySplashScreen } from './components/common/MySplashScreen';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import TimerMixin from 'react-timer-mixin';

if (Platform.OS === 'android'){
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends Component {
  state = { splash: true };

  componentWillUpdate () { 
    LayoutAnimation.easeInEaseOut();
  }

  componentWillMount(){    
    setTimeout(() => this.setState({ splash: false }), 2000);
  }

  renderPage() {
    if (this.state.splash) {
      return (<SplashScreen />);
    } else {
      return (<Home />);
    }
  }

  render() {
    return this.renderPage();
  }
}
