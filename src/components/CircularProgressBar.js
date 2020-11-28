import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, {Defs, LinearGradient, Stop, Circle} from 'react-native-svg';
import {Colors} from '../styles';
import {TextSizes} from '../styles/dimensions';
import {layouts} from '../styles/layouts';

const {interpolate, multiply} = Animated;

export default function CircularProgressBar({progress, size}) {
  const strokeWidth = 10;
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const {PI} = Math;
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;

  const circumference = r * 2 * PI;
  const α = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, PI * 2],
  });
  const strokeDashoffset = multiply(α, r);
  return (
    <View style={layouts.center}>
      <Svg width={size} height={size} style={styles.container}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor="#f7cd46" />
            <Stop offset="1" stopColor="#ef9837" />
          </LinearGradient>
        </Defs>
        <Circle
          stroke={Colors.coolGrey6}
          fill="none"
          {...{
            strokeWidth,
            cx,
            cy,
            r,
          }}
        />
        <AnimatedCircle
          stroke="url(#grad)"
          fill="none"
          strokeDasharray={`${circumference}, ${circumference}`}
          {...{
            strokeDashoffset,
            strokeWidth,
            cx,
            cy,
            r,
          }}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>2</Text>
        <Text style={styles.subtitleText}>days left</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    transform: [{rotateZ: '270deg'}],
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  titleText: {
    marginTop: -5,
    fontSize: TextSizes.extraLargeText,
    fontWeight: '800',
    color: Colors.black,
  },
  subtitleText: {
    marginTop: -5,
    fontSize: TextSizes.ultraSmallText,
    fontWeight: '600',
    color: Colors.coolGrey9,
  },
});
