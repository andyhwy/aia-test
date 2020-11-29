import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Sae} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LogoAiaVitality from '../assets/images/logo_aia_vitality.svg';
import AppButton from '../components/AppButton';
import TouchableText from '../components/TouchableText';
import {Colors} from '../styles';
import {SpaceSizes, TextSizes} from '../styles/dimensions';
import {layouts} from '../styles/layouts';

export default function Register(props) {
  return (
    <View style={[layouts.loginContainer]}>
      <View height="30%" width="100%" style={layouts.loginTopContainer}>
        <View style={layouts.loginBackgroundVideoOverlay} />
        <View style={layouts.loginHeaderTitleContainer}>
          <SafeAreaView>
            <LogoAiaVitality width="160" height="50" />
          </SafeAreaView>
          <Text style={layouts.loginHeaderTitleTextStyle}>Sign Up</Text>
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
          <Sae
            style={{marginTop: SpaceSizes.largeSpace}}
            label={'Confirm Password'}
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
            title="Register"
            onPress={() => {
              props.navigation.popToTop();
            }}
          />
          <TouchableText />
        </View>
      </ScrollView>
    </View>
  );
}
