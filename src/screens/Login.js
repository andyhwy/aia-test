import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Sae} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import LogoAiaVitality from '../assets/images/logo_aia_vitality.svg';
import AppButton from '../components/AppButton';
import TouchableText from '../components/TouchableText';
import {Colors} from '../styles';
import {SpaceSizes, TextSizes} from '../styles/dimensions';
import {layouts} from '../styles/layouts';

export default function Login(props) {
  return (
    <View style={[layouts.loginContainer]}>
      <View height="40%" width="100%" style={layouts.loginTopContainer}>
        <Video
          source={require('../assets/videos/bg_video.mp4')}
          resizeMode="cover"
          isMuted={true}
          repeat={true}
          onBuffer={() => {}}
          onError={() => {}}
          style={layouts.loginBackgroundVideo}
        />
        <View style={layouts.loginBackgroundVideoOverlay} />
        <View style={layouts.loginHeaderTitleContainer}>
          <SafeAreaView>
            <LogoAiaVitality width="160" height="50" />
          </SafeAreaView>
          <Text style={layouts.loginHeaderTitleTextStyle}>Sign In</Text>
        </View>
      </View>
      <ScrollView style={layouts.loginBottomContainer}>
        <View>
          <Sae
            label={'Login ID'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={Colors.aiaRed}
            inputPadding={16}
            inputStyle={{color: Colors.black, fontSize: TextSizes.smallText}}
            labelHeight={24}
            labelStyle={{color: Colors.coolGrey10}}
            borderHeight={2}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <Sae
            style={{marginTop: SpaceSizes.largeSpace}}
            label={'Password'}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={Colors.aiaRed}
            inputPadding={16}
            inputStyle={{color: Colors.black, fontSize: TextSizes.smallText}}
            labelHeight={24}
            labelStyle={{color: Colors.coolGrey10}}
            borderHeight={2}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
          />
          <AppButton
            style={layouts.loginButton}
            title="Login"
            onPress={() => {
              props.navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}
          />
          <TouchableText />
          <View style={[layouts.horizontal, layouts.center, {marginTop: 20}]}>
            <TouchableText
              style={{padding: SpaceSizes.normalSpace}}
              textStyle={{color: Colors.coolGrey10}}
              onPress={() => {
                props.navigation.navigate('Register');
              }}>
              Don't have an account?
            </TouchableText>
            <TouchableText
              textStyle={layouts.loginRegisterTextStyle}
              onPress={() => {
                props.navigation.navigate('Register');
              }}>
              Sign Up
            </TouchableText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
