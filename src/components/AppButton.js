import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextSizes, OtherSizes, SpaceSizes} from '../styles/dimensions';

export default function AppButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[props.style, styles.appButtonContainer]}>
      <Text style={[styles.appButtonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    shadowColor: 'rgba(0,0,0, .3)',
    shadowOffset: {height: 2, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: OtherSizes.elevation,
    borderRadius: OtherSizes.largeCornerRadius,
    paddingVertical: SpaceSizes.normalSpace,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: TextSizes.largeText,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
