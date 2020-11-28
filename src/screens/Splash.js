import React from 'react';
import {View, StatusBar} from 'react-native';
import LogoAiaSvg from '../assets/images/logo_aia.svg';
import {Colors} from '../styles';
import {layouts} from '../styles/layouts';

export default function Splash() {
  return (
    <View style={layouts.splashContainer}>
      <StatusBar backgroundColor={Colors.aiaRed} barStyle={'light-content'} />
      <LogoAiaSvg width="160" height="160" />
    </View>
  );
}
