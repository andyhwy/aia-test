import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styles';
import {TextSizes} from '../styles/dimensions';

export default function IconTextColumn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon
          style={styles.leftIconStyle}
          name={props.leftIcon}
          size={20}
          color={Colors.coolGrey6}
        />
        <View style={styles.centerContainer}>
          <Text style={styles.titleTextStyle}>{props.title}</Text>
          {props.subtitle && (
            <Text style={styles.subtitleTextStyle}>{props.subtitle}</Text>
          )}
        </View>
      </View>
      <Icon
        style={styles.rightIconStyle}
        name={props.rightIcon || 'chevron-right'}
        size={20}
        color={Colors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  container: {
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerContainer: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  titleTextStyle: {
    fontSize: TextSizes.normalText,
    fontWeight: '500',
    color: Colors.black,
  },
  subtitleTextStyle: {
    fontSize: TextSizes.smallText,
    fontWeight: '500',
    color: Colors.coolGrey9,
  },
  leftIconStyle: {
    width: 30,
    textAlign: 'center',
  },
  rightIconStyle: {
    width: 30,
    textAlign: 'center',
  },
});
